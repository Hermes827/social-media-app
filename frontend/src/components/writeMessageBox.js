import React from 'react';
import Button from 'react-bootstrap/Button';
// import { Link, useParams } from "react-router-dom";
// import { withRouter } from 'react-router';

class WriteMessageBox extends React.Component {

  render(){
  return (
    <div className="writeMessageBox">
    <h5 className="writeMessageBoxH5">Send message to: </h5>
    <img className="writeMessageBoxImg" src={this.props.info.profileImg} width="100" alt="profile"/>
    <h3 className="writeMessageBoxH3">{this.props.info.name}</h3>
    <form className="writeMessageBoxForm">
    <textarea className="writeMessageBoxInput"/><br/>
    <Button className="writeMessageBoxFormButton" onClick={this.props.toggle}>Cancel</Button>
    <Button className="writeMessageBoxFormButton">Send</Button>
    </form>
    </div>
  );
}
}

export default WriteMessageBox;
