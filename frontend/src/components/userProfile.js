import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';
import { fetchUserData } from '../actions/index.js';
import { Link, useParams } from "react-router-dom";
import ThumbnailProfile from './thumbnailProfile.js'
import { withRouter } from 'react-router';
import { compose } from 'redux'

class UserProfile extends React.Component {

  constructor(){
    super()
    this.state = {
      person: null
    }
  }

  componentDidMount(){
    this.getUserData()
  }

  getUserData(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

fetch(`http://localhost:4000/users/find?userID=${this.props.match.params.id}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    this.setState({
      person: result
    })
  })
  .catch(error => console.log('error', error));
  }

  addFriend = () => {
    console.log(this.props.match.params.id)
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", localStorage.token);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`http://localhost:4000/users/addfriend?userID=${this.props.match.params.id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      }

  sendMessage = () => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", localStorage.token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"message":"hello"});

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

fetch(`http://localhost:4000/users/sendmessage?userID=${this.props.match.params.id}`, requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  render(){
  return (
    <div className="profile">
    <h1>{(this.state.person !== null) ? this.state.person.name : null}</h1>

    <img src={(this.state.person !== null) ? this.state.person.profileImg : null} width="100"/>
    <Button onClick={this.addFriend}>Add friend</Button>
    <Button onClick={this.sendMessage}>Message</Button>
    <Link to="/homepage/user">
      <Button variant="primary">Back</Button>
    </Link>
    </div>
  );
}
}

const mapDispatchToProps = {
  getAllUpdates, fetchUserData
};

const mapStateToProps = (state) => ({
  updates: state.updates,
  currentUser: state.currentUser
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UserProfile);
