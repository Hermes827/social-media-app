import React from 'react';
import './App.css';
import Login from './components/authentication/login.js'
import Signup from './components/authentication/signup.js'
import Welcomepage from './components/welcomepage.js'
import Homepage from './components/homepageDashboard/homepage.js'
import Userpage from './components/statusUpdates/userpage.js'
import Settings from './components/homepageDashboard/settings.js'
import EditProfile from './components/homepageDashboard/editProfile.js'
import Search from './components/homepageDashboard/search.js'
import Profile from './components/homepageDashboard/profile.js'
import UserProfile from './components/universal/userProfile.js'
import Mailbox from './components/homepageDashboard/mail/mailbox.js'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

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
         <Route path="/userprofile/:id">
           <UserProfile/>
         </Route>
         <Route path="/homepage">
           <Homepage/>
             <Route path="/homepage/search">
               <Search/>
             </Route>
             <Route path="/homepage/user">
               <Userpage/>
             </Route>
             <Route path="/homepage/editprofile">
               <EditProfile/>
             </Route>
             <Route path="/homepage/settings">
               <Settings/>
             </Route>
             <Route path="/homepage/profile">
               <Profile/>
             </Route>
             <Route path="/homepage/userprofile/:id">
               <UserProfile/>
             </Route>
             <Route path="/homepage/mailbox">
               <Mailbox/>
             </Route>
         </Route>
       </Switch>
      </Router>
    </div>
  );
}
}

export default App;
