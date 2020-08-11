import React from 'react';
// import Button from 'react-bootstrap/Button';
import Explorer from './explorer.js'
import ViewMail from './viewMail.js'
import { connect } from 'react-redux';
import { fetchUserData } from '../../../actions/index.js';

class Mailbox extends React.Component {

  constructor(){
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount(){
    this.props.fetchUserData(localStorage.token)
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.messages.length === 0){
      this.getMessages()
    }
  }

  getMessages(){
    let arr = []
      this.props.currentUser.mailBox.map(messageID => {
        var requestOptions = {
              method: 'GET',
              redirect: 'follow'
            };
    fetch(`http://localhost:4000/mail?mailID=${messageID}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        arr.push(result)
        if(arr.length === this.props.currentUser.mailBox.length){
          this.setState({
            messages: arr
          })
        }
      })
      .catch(error => console.log('error', error));
    })
    }

    waitForMessages = () => {
      if(this.state.messages.length === 0){
        return
      } else {
        return this.state.messages
      }
    }

  render(){
  return (
    <div className="mailbox">
      <Explorer mail={this.state.messages}/>
      <ViewMail mail={this.state.messages}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);
