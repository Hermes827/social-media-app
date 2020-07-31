import React from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  Link
} from "react-router-dom";

class Welcomepage extends React.Component {

  render(){
  return (
    <div className="App">
      <Jumbotron className="jumbotron">
      <h1>Connect</h1>
      <p>A simple way to connect with your friends</p>
      <div className="appButtonContainer">
         <Link to="/login">
           <Button variant="primary" block>Log in</Button>
         </Link>
         <Link to="/signup">
           <Button variant="primary" block>Sign up</Button>
         </Link>
      </div>
      </Jumbotron>
    </div>
  );
}
}

export default Welcomepage;
