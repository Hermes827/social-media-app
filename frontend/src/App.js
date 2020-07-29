import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Login from './components/login.js'
import Signup from './components/signup.js'
import WelcomePage from './components/welcomePage.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  constructor(){
    super()
    this.state = {

    }
  }

  render(){
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage/>
        </Route>
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/signup">
           <Signup/>
         </Route>
       </Switch>
      </Router>
    </div>
  );
}
}

export default App;
