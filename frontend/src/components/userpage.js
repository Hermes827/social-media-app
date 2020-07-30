import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Livefeed from './livefeed.js'

class Userpage extends React.Component {

  constructor(){
    super()

  }

  render(){
  return (
    <div className="userpage">
      <Livefeed/>
    </div>
  );
}
}

export default Userpage;
