import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Homepage extends React.Component {

  constructor(){
    super()

  }

  render(){
  return (
    <div className="homepage">
    <Button>search</Button>
    <Button>Edit profile</Button>
    <Button>Settings</Button>
    <Button>Log out</Button>
    </div>
  );
}
}

export default Homepage;
