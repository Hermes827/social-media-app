import React from 'react';

class AlertDiv extends React.Component {

  combinedFunction = () => {
    this.props.toggleAlert()
    setTimeout(()=> this.props.toggle(), 400)
  }

  render(){
  return (
    <div className="alertDiv" onClick={this.combinedFunction}>
    <h1>Message Sent!</h1>
    </div>
  );
}
}

export default AlertDiv;
