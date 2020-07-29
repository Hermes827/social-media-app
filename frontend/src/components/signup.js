import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {withRouter} from 'react-router';

class Signup extends React.Component {

  constructor(){
    super()
    this.state = {
      name: "",
     email: "",
     password: "",
     username: ""
    }
  }

  captureText = (e) => {
  console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value
  })
  console.log(e.target.name)
}

onSubmit = (e) => {
  e.preventDefault()
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({"name": this.state.name, "email": this.state.email, "username": this.state.username, "password": this.state.password});
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("http://localhost:4000/api/auth/signup", requestOptions)
    .then(response => response.json())
    .then(result => {
      this.props.history.push('/homepage/user')
    })
    .catch(error => console.log('error', error));
}

  render(){
  return (
    <div>
      <Jumbotron className="jumbotron">
      <h1>Signup</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" placeholder="name" onChange={this.captureText}></input><br/>
        <label>Email:</label>
        <input type="text" name="email" placeholder="email" onChange={this.captureText}></input><br/>
        <label>Username:</label>
        <input type="text" name="username" placeholder="username" onChange={this.captureText}></input><br/>
        <label>Password:</label>
        <input type="password" name="password" placeholder="password" onChange={this.captureText}></input><br/>
      </form>
      <Button variant="primary" onClick={this.onSubmit}>Sign up</Button>
        <Link to="/">
          <Button variant="primary">Cancel</Button>
        </Link>
      </Jumbotron>
    </div>
  );
}
}

export default withRouter(Signup)
