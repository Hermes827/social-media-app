import React from 'react';
import { connect } from 'react-redux';

class Comment extends React.Component {

  render(){
  return (
    <div className="update">
      <h5>{this.props.info.authorName + ": " + this.props.info.content}</h5>
    </div>
  );
}
}

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
