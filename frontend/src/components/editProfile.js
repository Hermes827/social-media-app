import React from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAllUpdates } from '../actions/index.js';
import { fetchUserData } from '../actions/index.js';
import { Link } from "react-router-dom";

class EditProfile extends React.Component {

  constructor(props) {
      super(props);

      this.onFileChange = this.onFileChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          profileImg: '',
          picture: ""
      }
  }

  componentDidMount(){
    this.props.fetchUserData(localStorage.token)
  }

  onFileChange(e) {
    // this.resizePhoto(e.target)
      this.setState({
        profileImg: e.target.files[0]
      })
  }

  onSubmit(e) {
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
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }

    // resizePhoto(arg){
    //   var filesToUpload = arg.files;
    //   var file = filesToUpload[0];
    //
    //   var img = document.createElement("img");
    //   var reader = new FileReader();
    //   reader.onload = function(e) {img.src = e.target.result}
    //   reader.readAsDataURL(file);
    //   var canvas = document.createElement('canvas');
    //   var ctx = canvas.getContext("2d");
    //   ctx.drawImage(img, 0, 0);
    //
    //   var MAX_WIDTH = 800;
    //   var MAX_HEIGHT = 600;
    //   var width = img.width;
    //   var height = img.height;
    //
    //   if (width > height) {
    //     if (width > MAX_WIDTH) {
    //       height *= MAX_WIDTH / width;
    //       width = MAX_WIDTH;
    //     }
    //   } else {
    //     if (height > MAX_HEIGHT) {
    //       width *= MAX_HEIGHT / height;
    //       height = MAX_HEIGHT;
    //     }
    //   }
    //   canvas.width = width;
    //   canvas.height = height;
    //   var ctx = canvas.getContext("2d");
    //   ctx.drawImage(img, 0, 0, width, height);
    //
    //   var dataurl = canvas.toDataURL("image/png");
    //   console.log(dataurl)
    // }

//     componentDidMount(){
//       var requestOptions = {
//           method: 'GET',
//           redirect: 'follow'
//         };
//
// fetch("http://localhost:4000/api", requestOptions)
//   .then(response => response.json())
//   .then(result => {
//     console.log(result.users[7].profileImg)
//     this.setState({
//       picture: result.users[8].profileImg
//     })
//   })
//   .catch(error => console.log('error', error));
//     }


  render(){
  return (
    <div className="editProfile">
          <div className="row">
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <input type="file" onChange={this.onFileChange} />
                  </div>
                  <div className="form-group">
                      <button className="btn btn-primary" type="submit">Upload</button>
                  </div>
              </form>
          </div>
          <img src={this.state.picture} alt="Girl in a jacket" width="500" height="600"/>
              <Link to="/homepage/user">
                <Button variant="primary">Back</Button>
              </Link>
              {console.log(this.props)}
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
