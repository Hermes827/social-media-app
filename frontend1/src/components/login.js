import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Login extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }

  render(){
  return (
    <div>
      <Jumbotron className="jumbotron">
      <h1>Login</h1>
      <form>
        <label>Username:</label>
        <input></input><br/>
        <label>Password:</label>
        <input></input><br/>
      </form>
      <Button variant="primary">Log in</Button>
        <Link to="/">
          <Button variant="primary">Cancel</Button>
        </Link>
      </Jumbotron>
    </div>
  );
}
}

export default Login;
