import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'

class Homepage extends React.Component {

  logout = () => {
    delete localStorage.token
    this.props.history.push('/')
  }

  hasToken(){
    if(!localStorage.token){
      this.props.history.push('/')
    }
  }

  render(){
  return (
    <div className="homepage">
    <Button className="homepageButtons">search</Button>
    <Button className="homepageButtons">Edit profile</Button>
    {this.props.currentUser.name}
    <Button className="homepageButtons">Settings</Button>
    <Button className="homepageButtons" onClick={this.logout}>Log out</Button>
    {this.hasToken()}
    </div>
  );
}
}

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

// export default withRouter(Homepage);
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Homepage);
