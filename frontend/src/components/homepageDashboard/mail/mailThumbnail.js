import React from 'react';
import { connect } from 'react-redux';
import { getChosenMail } from '../../../actions/index.js';

class MailThumbnail extends React.Component {

  render(){
  return (
    <div className="mailThumbnail" onClick={()=> this.props.getChosenMail(this.props.mail)}>
      name placeholder:
      {console.log(this.props.mail.message[0])}
    </div>
  );
}
}

const mapDispatchToProps = {
  getChosenMail
};

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MailThumbnail);
