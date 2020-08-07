import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';
import { Link } from "react-router-dom";
import ThumbnailProfile from './thumbnailProfile.js'
import { fetchUserData } from '../actions/index.js';

class Search extends React.Component {

  constructor(){
    super()

    this.state = {
      people: []
    }
  }

  componentDidMount(){
    this.props.fetchUserData(localStorage.token)
  }

findFriends = () => {
  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:4000/users/", requestOptions)
  .then(response => response.json())
  .then(result => {
    // console.log(result)
    let newResult = result.filter(person => {
      return person._id !== this.props.currentUser._id
    })
    console.log(newResult)
    this.setState({
      people: newResult
    })
  })
  .catch(error => console.log('error', error));
}


  render(){
  return (
    <div className="search">
    search
    <Button onClick={this.findFriends}>Find friends</Button>
    <Link to="/homepage/user">
      <Button variant="primary">Back</Button>
    </Link>
    {console.log(this.props)}
    {this.state.people.map(person => {
      return <ThumbnailProfile person={person}/>
    })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
