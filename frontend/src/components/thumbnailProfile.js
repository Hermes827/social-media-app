import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';
import { fetchUserData } from '../actions/index.js';
import { Link } from "react-router-dom";

class ThumbnailProfile extends React.Component {

  seeProfile = () => {
    console.log(this.props.person)
  }

  render(){
  return (
    <div className="update" onClick={this.seeProfile}>
    <h1>{this.props.person.name}</h1>
    <Link to={`/homepage/userprofile/${this.props.person._id}`}>
    <img src={this.props.person.profileImg} width="100"/>
    </Link>
    <Button>Add friend</Button>
    </div>
  );
}
}

export default ThumbnailProfile;
