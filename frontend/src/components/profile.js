import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';
import { fetchUserData } from '../actions/index.js';
import { Link } from "react-router-dom";

class Profile extends React.Component {

  componentDidMount(){
    this.props.fetchUserData(localStorage.token)
  }

  render(){
  return (
    <div className="update">
    <h1>{this.props.currentUser.name}</h1>
    <img src={this.props.currentUser.profileImg} width="100"/>
    {console.log(this.props)}
    <Button>Add friend</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
