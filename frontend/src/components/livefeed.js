import React from 'react';
import Button from 'react-bootstrap/Button';
import Update from './update'
import { connect } from 'react-redux';
import { loadUser } from '../actions/index.js';

class Livefeed extends React.Component {

  constructor(){
    super()
    this.state = {
      updates: [],
      title: "",
      content: ""
    }
  }

  componentDidMount(){
  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
  };
  fetch("http://localhost:4000/updates", requestOptions)
  .then(response => response.json())
  .then(result => {
    this.setState({
      updates: result
    })
  })
  .catch(error => console.log('error', error));
  }

  captureText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

onSubmit = (e) => {
  e.preventDefault()
  var myHeaders = new Headers();
  myHeaders.append("x-access-token", `${localStorage.token}`);
  myHeaders.append("Content-Type", "application/json");
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  var raw = JSON.stringify({"title": this.state.title,"content": this.state.content,"date": dateTime, "authorID": localStorage.id});
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("http://localhost:4000/updates", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log('error', error));
  }

  random(){
    this.props.loadUser()
  }

  // delete(arg){
  //   var requestOptions = {
  //     method: 'DELETE',
  //     redirect: 'follow'
  //   };
  //   fetch(`http://localhost:4000/updates/${arg}`, requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result)
  //     })
  //     .catch(error => console.log('error', error));
  // }

  render(){
  return (
    <div className="livefeed">
      <form>
        <label>Title: </label>
        <input type="text" name="title" placeholder="title" onChange={this.captureText}></input>
        <label>Content: </label>
        <input type="text" name="content" placeholder="content" onChange={this.captureText}></input>
      </form>
      <Button variant="primary" onClick={this.onSubmit}>submit</Button>
      {this.state.updates.map(update => {
        console.log(update)
        return <Update
                key={update._id}
                info={update}
                />
      })}
      {console.log(this.props)}
      {this.random()}
    </div>
  );
}
}

const mapDispatchToProps = {
  // playerActs, computerActs, scorePoint
  loadUser
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser

  // playerTurn: state.playerTurn,
  // computerPicks: state.computerPicks,
  // computerTurnNow: state.computerTurnNow
})

export default connect(mapStateToProps, mapDispatchToProps)(Livefeed);
