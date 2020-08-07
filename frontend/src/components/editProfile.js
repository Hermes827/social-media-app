import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates, fetchUserData } from '../actions/index.js';
import { Link } from "react-router-dom";

class EditProfile extends React.Component {

  constructor(){
      super()
      this.state = {
          profileImg: ''
      }
  }

  componentDidMount(){
    this.props.fetchUserData(localStorage.token)
  }

  onFileChange = (e) => {
      this.setState({
        profileImg: e.target.files[0]
      })
  }

  onSubmit = (e) => {
    e.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", localStorage.token);
    const formData = new FormData()
    formData.append('profileImg', this.state.profileImg)

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formData,
      redirect: 'follow'
    };

    fetch("http://localhost:4000/users/uploadphoto", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
      })
      .catch(error => console.log('error', error));
        }

  render(){
  return (
    <div className="editProfile">
      <form onSubmit={this.onSubmit}>
          <input type="file" onChange={this.onFileChange}/>
          <Button type="submit">Upload</Button>
      </form>
      <Link to="/homepage/user">
        <Button variant="primary">Back</Button>
      </Link>
    </div>
  );
}
}

const mapDispatchToProps = {
  getAllUpdates, fetchUserData
};

const mapStateToProps = (state) => ({
  updates: state.updates,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

// <img src={(this.state.picture !== null) ? this.state.picture : null} alt="image displays here" width="200" height="300"/>
