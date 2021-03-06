import React from 'react';
import MailThumbnail from './mailThumbnail'

class Explorer extends React.Component {

  render(){
  return (
    <div className="explorer">
        <h1>Messages</h1>
      {
        (this.props.mail !== undefined) ? this.props.mail.map(mail => {
          return <MailThumbnail
                  mail={mail}
                  key={mail._id}
                  />
        }) : null
      }
    </div>
  );
}
}

export default Explorer;
