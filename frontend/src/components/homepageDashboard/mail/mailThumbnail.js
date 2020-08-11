import React from 'react';
import { connect } from 'react-redux';
import { getChosenMail } from '../../../actions/index.js';

class MailThumbnail extends React.Component {

  constructor(){
    super()
    this.state = {
      thumbnailImg: ""
    }
  }

  componentDidMount(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:4000/users/find?userID=${this.props.mail.authorID}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        this.setState({
          thumbnailImg: result.profileImg
        })
      })
      .catch(error => console.log('error', error));
    }

  makeBlurb(arg){
    if(arg.length > 32){
      return arg.slice(0,32)
    } else {
    return arg
  }
  }

  render(){
  return (
    <div className="mailThumbnail" onClick={()=> this.props.getChosenMail(this.props.mail)}>
    <img
      className="mailThumbnailProfilePicture"
      src={this.state.thumbnailImg} width="40"
      height="40" alt="thumbnail"
      />
    <h5 className="mailThumbnailH5Name">{this.props.mail.authorName}</h5><br/>
    <h6 className="mailThumbnailH6Content">{this.makeBlurb(this.props.mail.content) + '...'}</h6>
    </div>
  );
}
}

const mapDispatchToProps = {
  getChosenMail
};

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(MailThumbnail);
