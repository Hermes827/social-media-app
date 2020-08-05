import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux'

class Homepage extends React.Component {

  logout = () => {
    delete localStorage.token
    // this.props.history.push('/')
  }

  hasToken(){
    if(!localStorage.token){
      this.props.history.push('/')
    }
  }

  componentDidMount(){

  }

  render(){
  return (
    <div className="homepage">
      <Link to="/homepage/search">
        <Button variant="primary" className="homepageButtons">Search</Button>
      </Link>
      <Link to="/homepage/editprofile">
        <Button variant="primary" className="homepageButtons">Edit profile</Button>
      </Link>
      <Link to="/homepage/settings">
        <Button variant="primary" className="homepageButtons">Settings</Button>
      </Link>
      <Link to={`/homepage/profile/`}>
        <Button variant="primary" className="homepageButtons">See Profile</Button>
      </Link>
        <Button className="homepageButtons" onClick={this.logout}>Log out</Button>
        {console.log(this.props.currentUser._id)}
    {this.hasToken()}
    </div>
  );
}
}

// <Link to="/search">
//   <Button variant="primary" className="homepageButtons">search</Button>
// </Link>


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
