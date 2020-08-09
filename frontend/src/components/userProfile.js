import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
// import { Link, useParams } from "react-router-dom";
// import ThumbnailProfile from './thumbnailProfile.js'
import { withRouter } from 'react-router';
import { compose } from 'redux'
import WriteMessageBox from './writeMessageBox.js'

class UserProfile extends React.Component {

  constructor(){
    super()
    this.state = {
      person: null,
      sendMessage: false
    }
  }

  componentDidMount(){
    this.getUserData()
  }

  getUserData(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

  fetch(`http://localhost:4000/users/find?userID=${this.props.match.params.id}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      this.setState({
        person: result
      })
    })
  .catch(error => console.log('error', error));
  }

  addFriend = () => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", localStorage.token);
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`http://localhost:4000/users/addfriend?userID=${this.props.match.params.id}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      }

  sendMessage = () => {
    // var myHeaders = new Headers();
    // myHeaders.append("x-access-token", localStorage.token);
    // myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify({"message":"hello"});
    // var requestOptions = {
    //   method: 'PUT',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // fetch(`http://localhost:4000/users/sendmessage?userID=${this.props.match.params.id}`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

    };

    renderMessageBox = () => {
      if(this.state.sendMessage){
        return <WriteMessageBox
                info={this.state.person}
                toggle={this.toggleState}
                />
      }
    }

    toggleState = () => {
      this.setState({
        sendMessage: !this.state.sendMessage
      })
    }

  render(){
  return (
    <div className="userProfile">
      <div className="userProfileButtonContainer">
      <Button onClick={this.addFriend}>Add friend</Button>
      <Button onClick={this.toggleState}>Message</Button>
      </div><br/>
    <div className="userProfileInnerBodyDiv">
    <h1 className="userProfileH1">{(this.state.person !== null) ? this.state.person.name : null}</h1>
    <img src={(this.state.person !== null) ? this.state.person.profileImg : null} width="100" alt="profile"/>
    </div>
    {this.renderMessageBox()}
    </div>
  );
}
}

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
})

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UserProfile);
