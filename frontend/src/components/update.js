import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';

class Update extends React.Component {

  constructor(){
    super()
    this.state = {
      canDelete: false
    }
  }

  renderDeleteButton = () => {
    if(this.props.info.authorID === this.props.currentUser._id){
      return null
    } else {
      return "hideDeleteButton"
    }
  }

  delete = () => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", localStorage.token);
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`http://localhost:4000/updates/${this.props.info._id}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        this.props.getAllUpdates()
      })
      .catch(error => console.log('error', error));
  }

  render(){
  return (
    <div className="update">
      <h1>{this.props.info.title}</h1>
      <h1>{this.props.info.content}</h1>
      <h5>{this.props.info.authorName}</h5>
      <h5>{this.props.info.date}</h5>
      <button className={this.renderDeleteButton()} onClick={this.delete}>delete</button>
    </div>
  );
}
}

const mapDispatchToProps = {
  getAllUpdates
};

const mapStateToProps = (state) => ({
  updates: state.updates,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Update);
