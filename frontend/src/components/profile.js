import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { fetchUserData } from '../actions/index.js';
import { Link } from "react-router-dom";

class Profile extends React.Component {

  componentDidMount(){
    this.props.fetchUserData(localStorage.token)
  }

  render(){
  return (
    <div className="profile">
    <h1>{this.props.currentUser.name}</h1>
    <img src={this.props.currentUser.profileImg} width="100"/>
    <Link to="/homepage/user">
      <Button variant="primary">Back</Button>
    </Link>
    </div>
  );
}
}

const mapDispatchToProps = {
  fetchUserData
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
