import React from 'react';
import { connect } from 'react-redux';

class ViewMail extends React.Component {

  showContent(){
    if(this.props.chosenMail.content === undefined && this.props.mail.length !== 0){
      return this.props.mail[0].content
    } else {
      return this.props.chosenMail.content
    }
  }

  render(){
  return (
    <div className="viewMail">
        {this.showContent()}

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
