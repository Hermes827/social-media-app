import React from 'react';
// import Button from 'react-bootstrap/Button';
import Explorer from './explorer.js'
import ViewMail from './viewMail.js'
import { connect } from 'react-redux';
import { fetchUserData } from '../../../actions/index.js';

class Mailbox extends React.Component {

  componentDidMount(){
    this.props.fetchUserData(localStorage.token)
  }

  render(){
  return (
    <div className="mailbox">
        <Explorer info={this.props.currentUser}/>
        <ViewMail/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);
