import React from 'react';
import { connect } from 'react-redux';

class Settings extends React.Component {

  render(){
  return (
    <div className="update">
    settings
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
