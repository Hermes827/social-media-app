import React from 'react';
import './App.css';
import Login from './components/login.js'
import Signup from './components/signup.js'
import Welcomepage from './components/welcomepage.js'
import Homepage from './components/homepage.js'
import Userpage from './components/userpage.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
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
          <Welcomepage/>
        </Route>
         <Route path="/login">
           <Login/>
         </Route>
         <Route path="/signup">
           <Signup/>
         </Route>
         <Route path="/homepage">
           <Homepage/>
             <Route path="/homepage/user">
               <Userpage/>
             </Route>
         </Route>
       </Switch>
      </Router>
    </div>
  );
}
}

export default App;
