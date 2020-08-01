import React from 'react';

class Update extends React.Component {

  delete = () => {
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };
    fetch(`http://localhost:4000/updates/${this.props.info._id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  render(){
  return (
    <div className="update">
      <h1>{this.props.info.title}</h1>
      <h1>{this.props.info.content}</h1>
      <h5>{this.props.info.authorName}</h5>
      <h5>{this.props.info.date}</h5>
      <button onClick={this.delete}>delete</button>
    </div>
  );
}
}

export default Update;
