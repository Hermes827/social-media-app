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

class Homepage extends React.Component {

  constructor(){
    super()

  }

  logout = () => {
    delete localStorage.token
    this.props.history.push('/')
  }

  hasToken(){
    if(!localStorage.token){
      this.props.history.push('/')
    } else {
      console.log(localStorage)
    }
  }

  render(){
  return (
    <div className="homepage">
    <Button className="homepageButtons">search</Button>
    <Button className="homepageButtons">Edit profile</Button>
    <Button className="homepageButtons">Settings</Button>
    <Button className="homepageButtons" onClick={this.logout}>Log out</Button>
    {this.hasToken()}
    </div>
  );
}
}

export default withRouter(Homepage);
