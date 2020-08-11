import React from 'react';
import Button from 'react-bootstrap/Button';
import AlertDiv from './alertDiv'
import { fetchUserData } from '../../actions/index.js';
import { connect } from 'react-redux';

class WriteMessageBox extends React.Component {

  constructor(){
    super()
    this.state = {
      message: "",
      renderAlert: false
    }
  }

  captureText = (e) => {
      this.setState({
        message: e.target.value
      })
    }

  componentDidMount(){
    this.props.fetchUserData(localStorage.token)
  }

    sendMessage = () => {
      var myHeaders = new Headers();
      myHeaders.append("x-access-token", localStorage.token);
      myHeaders.append("Content-Type", "application/json");

      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var dateTime = date+' '+time;

      var raw = JSON.stringify({"content": this.state.message, "date": dateTime,
        "authorID": this.props.currentUser._id, "authorName": this.props.currentUser.name});

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }
      fetch(`http://localhost:4000/users/sendmessage?userID=${this.props.info._id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result)
          this.toggleAlert()
          this.setState({
            message: ""
          })
        })
        .catch(error => console.log('error', error));
      };

      toggleAlert = () => {
        this.setState({
          renderAlert: !this.state.renderAlert
        })
      }

      renderAlert(){
        if(this.state.renderAlert === true){
          return <AlertDiv toggleAlert={this.toggleAlert} toggle={this.props.toggle}/>
        }
      }

  render(){
  return (
    <div className="writeMessageBox">
    <h5 className="writeMessageBoxH5">Send message to: </h5>
    <img className="writeMessageBoxImg" src={this.props.info.profileImg} width="100" alt="profile"/>
    <h3 className="writeMessageBoxH3">{this.props.info.name}</h3>
    <form className="writeMessageBoxForm">
    <textarea className="writeMessageBoxInput" onChange={this.captureText} value={this.state.message}/><br/>
    <Button className="writeMessageBoxFormButton" onClick={this.props.toggle}>Cancel</Button>
    <Button className="writeMessageBoxFormButton" onClick={this.sendMessage}>Send</Button>
    </form>
    {this.renderAlert()}
    </div>
  );
}
}

const mapDispatchToProps = {
  fetchUserData
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteMessageBox);
