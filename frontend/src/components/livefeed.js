import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Get a reference to the database service
// var database = firebase.database();

class Livefeed extends React.Component {

  constructor(){
    super()

  }

  random(){
    fetch("https://social-media-app-284912.firebaseio.com")
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
  }

  render(){
  return (
    <div className="livefeed">
      <div>live feed</div>
      <form>
        <label>make an update</label>
        <input></input>
        <Button>submit</Button>
      </form>

    </div>
  );
}
}

export default Livefeed;
