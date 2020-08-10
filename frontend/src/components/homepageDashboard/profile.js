import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/index.js';
import { Link } from "react-router-dom";

class Profile extends React.Component {

  componentDidMount(){
    this.props.fetchUserData(localStorage.token)
  }

  render(){
  return (
    <div className="profile">
    <div>
      <Link to="/homepage/editprofile">
        <Button variant="primary" className="homepageButtons">Edit profile</Button>
      </Link>
    </div>
    <h1>{this.props.currentUser.name}</h1>
    <img src={this.props.currentUser.profileImg} width="100" alt="profile"/>
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
