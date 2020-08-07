import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class ThumbnailProfile extends React.Component {

  render(){
  return (
    <div className="update">
    <h1>{this.props.person.name}</h1>
    <Link to={`/homepage/userprofile/${this.props.person._id}`}>
    <img src={this.props.person.profileImg} width="100"/>
    </Link>
    <Button>Add friend</Button>
    </div>
  );
}
}

export default ThumbnailProfile;
