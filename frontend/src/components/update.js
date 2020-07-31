import React from 'react';

class Update extends React.Component {

  render(){
  return (
    <div className="update">
      <h1>{this.props.info.title}</h1>
      <h1>{this.props.info.content}</h1>
    </div>
  );
}
}

export default Update;
