import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import ThumbnailProfile from '../universal/thumbnailProfile.js'
import { fetchUserData } from '../../actions/index.js';

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
      let newResult = result.filter(person => {
        return person._id !== this.props.currentUser._id
      })
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
    {this.state.people.map(person => {
      return <ThumbnailProfile person={person} key={person._id}/>
    })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
