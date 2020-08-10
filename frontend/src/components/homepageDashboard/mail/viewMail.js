import React from 'react';
import { connect } from 'react-redux';

class ViewMail extends React.Component {

  render(){
  return (
    <div className="viewMail">
        {this.props.chosenMail.message}
    </div>
  );
}
}

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  chosenMail: state.chosenMail
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewMail);
