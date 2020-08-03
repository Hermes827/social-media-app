import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';
// import { getAllComments } from '../actions/index.js';
import Comment from './comment'

class Update extends React.Component {

  constructor(){
    super()
    this.state = {
      content: "",
      comments: []
    }
  }

  componentDidMount(){
    this.getComments()
  }

getComments(){

  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
  };

  fetch(`http://localhost:4000/comments/?updateID=${this.props.info._id}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({
        comments: result
      })
    })
    .catch(error => console.log('error', error));
  }

  captureText = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  comment(){
    document.getElementById("myTextField").focus();
  }

  submitComment = (e) => {
    e.preventDefault()

    var myHeaders = new Headers();
    myHeaders.append("x-access-token", `${localStorage.token}`);
    myHeaders.append("Content-Type", "application/json");

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    var raw = JSON.stringify({"userName": this.props.currentUser.userName, "content": this.state.content, "date": dateTime,
      "authorID": this.props.currentUser._id, "authorName": this.props.currentUser.name, "updateID": this.props.info._id});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/comments", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.setState({
          content: ""
        })
        this.getComments()
      })
      .catch(error => console.log('error', error));
  }

  renderDeleteButton = () => {
    if(this.props.info.authorID === this.props.currentUser._id){
      return null
    } else {
      return "hideDeleteButton"
    }
  }

  delete = () => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", localStorage.token);
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`http://localhost:4000/updates/${this.props.info._id}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        this.props.getAllUpdates()
      })
      .catch(error => console.log('error', error));
  }

  render(){
  return (
    <div className="update">
      <h1>{this.props.info.title}</h1>
      <h1>{this.props.info.content}</h1>
      <h5>{this.props.info.authorName}</h5>
      <h5>{this.props.info.date}</h5>
      <Button variant="primary" onClick={this.comment}>comment</Button>
      <Button variant="primary" className={this.renderDeleteButton()} onClick={this.delete}>delete</Button>
        {this.state.comments.map(comment => {
          return <Comment
                  key={comment._id}
                  info={comment}
                  />
        })}
        <form onSubmit={this.submitComment}>
          <input type="text" name="content" placeholder="leave a comment" id="myTextField" value={this.state.comment} onChange={this.captureText}></input>
        </form>
        {console.log(this.state.comments)}
    </div>
  );
}
}

const mapDispatchToProps = {
  getAllUpdates
};

const mapStateToProps = (state) => ({
  updates: state.updates,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Update);
