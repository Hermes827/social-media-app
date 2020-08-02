import React from 'react';
import Button from 'react-bootstrap/Button';
import Update from './update'
import { connect } from 'react-redux';
import { fetchUserData } from '../actions/index.js';
import { getAllUpdates } from '../actions/index.js';

class Livefeed extends React.Component {

  constructor(){
    super()
    this.state = {
      title: "",
      content: ""
    }
  }

  componentDidMount(){
  this.props.fetchUserData(localStorage.token)
  this.props.getAllUpdates()
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
  var raw = JSON.stringify({"title": this.state.title,"content": this.state.content,
    "date": dateTime, "authorID": this.props.currentUser._id, "authorName": this.props.currentUser.name });
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
      this.setState({
        title: "",
        content: ""
      })
      this.props.getAllUpdates()
    })
    .catch(error => console.log('error', error));
  }

  random = () => {
    console.log(this.props.updates)
  }

  render(){
  return (
    <div className="livefeed">
      <button onClick={this.random}>click for updates</button>
      <form>
        <label>Title: </label>
        <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.captureText}></input>
        <label>Content: </label>
        <input type="text" name="content" placeholder="content" value={this.state.content} onChange={this.captureText}></input>
        <Button variant="primary" onClick={this.onSubmit}>submit</Button>
      </form>
      {this.props.updates.map(update => {
        return <Update
                key={update._id}
                info={update}
                />
      })}
    </div>
  );
}
}

const mapDispatchToProps = {
  fetchUserData, getAllUpdates
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  updates: state.updates
})

export default connect(mapStateToProps, mapDispatchToProps)(Livefeed);
