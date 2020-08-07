import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
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
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
