import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';
import { fetchUserData } from '../actions/index.js';
import { Link } from "react-router-dom";

class ThumbnailProfile extends React.Component {

  getInfo(){
    
  }

  render(){
  return (
    <div className="update" onClick={this.getInfo}>
    <h1>{this.props.person.name}</h1>
    <img src={this.props.person.profileImg} width="100"/>
    {console.log(this.props)}
    <Button>Add friend</Button>
    </div>
  );
}
}

export default ThumbnailProfile;
