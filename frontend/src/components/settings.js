import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';
import { Link } from "react-router-dom";

class Settings extends React.Component {

  render(){
  return (
    <div className="update">
    settings
    <Link to="/homepage/user">
      <Button variant="primary">Back</Button>
    </Link>
    </div>
  );
}
}

const mapDispatchToProps = {
  getAllUpdates
};

const mapStateToProps = (state) => ({
  updates: state.updates,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
