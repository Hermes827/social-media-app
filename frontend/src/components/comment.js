import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';
import { getAllComments } from '../actions/index.js';

class Comment extends React.Component {


  render(){
  return (
    <div className="update">
      <h5>{this.props.info.authorName + ": " + this.props.info.content}</h5>
      {console.log(this.props.info)}
    </div>
  );
}
}

const mapDispatchToProps = {
  getAllUpdates, getAllComments
};

const mapStateToProps = (state) => ({
  updates: state.updates,
  currentUser: state.currentUser,
  comments: state.comments
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
