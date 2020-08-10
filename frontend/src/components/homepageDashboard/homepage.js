import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'

class Homepage extends React.Component {

  logout = () => {
    delete localStorage.token
    this.hasToken()
  }

  hasToken(){
    if(!localStorage.token){
      this.props.history.push('/')
    }
  }

  render(){
  return (
    <div className="homepage">
      <Link to="/homepage/search">
        <Button variant="primary" className="homepageButtons">Search</Button>
      </Link>
      <Link to={`/homepage/profile/`}>
        <Button variant="primary" className="homepageButtons">See Profile</Button>
      </Link>
      <Link to={`/homepage/mailbox/`}>
        <Button variant="primary" className="homepageButtons">Mailbox</Button>
      </Link>
      <Link to="/homepage/settings">
        <Button variant="primary" className="homepageButtons">Settings</Button>
      </Link>
      <Link to="/homepage/user">
        <Button variant="primary" className="homepageButtons">Home</Button>
      </Link>
        <Button variant="primary" className="homepageButtons" onClick={this.logout}>Log out</Button>
      {(this.props.history.location.pathname === "/homepage" || this.props.history.location.pathname === "/homepage/" )
        ? this.props.history.push('/homepage/user') : null}
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

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Homepage);
