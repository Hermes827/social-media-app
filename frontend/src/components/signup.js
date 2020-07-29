import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Signup extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }

  render(){
  return (
    <div>
      <Jumbotron className="jumbotron">
      <h1>Signup</h1>
      <form>
        <label>Email:</label>
        <input></input><br/>
        <label>Username:</label>
        <input></input><br/>
        <label>Password:</label>
        <input></input><br/>
      </form>
      <Button variant="primary">Sign up</Button>
        <Link to="/">
          <Button variant="primary">Cancel</Button>
        </Link>
      </Jumbotron>
    </div>
  );
}
}

export default Signup;
