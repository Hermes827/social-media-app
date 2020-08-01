import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { fetchUserData } from '../actions/index.js';

class Login extends React.Component {

  constructor(){
    super()
    this.state = {
      password: "",
      username: ""
    }
  }

  captureText = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

onSubmit = (e) => {
  e.preventDefault()
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({"username": this.state.username, "password": this.state.password});
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("http://localhost:4000/api/auth/login", requestOptions)
    .then(response => response.json())
    .then(result => {
      if(result.token){localStorage.token = result.token}
      this.props.fetchUserData(localStorage.token)
      this.props.history.push('/homepage/user')
    })
    .catch(error => console.log('error', error));
}

  render(){
  return (
    <div>
      <Jumbotron className="jumbotron">
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="username" placeholder="username" onChange={this.captureText}></input><br/>
        <label>Password:</label>
        <input type="password" name="password" placeholder="password" onChange={this.captureText}></input><br/>
      </form>
      <Button variant="primary" onClick={this.onSubmit}>Log in</Button>
        <Link to="/">
          <Button variant="primary">Cancel</Button>
        </Link>
      </Jumbotron>
    </div>
  );
}
}

const mapDispatchToProps = {
  fetchUserData
};

const mapStateToProps = (state) => ({
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);
