import React from 'react';
import MailThumbnail from './mailThumbnail'

class Explorer extends React.Component {

  render(){
  return (
    <div className="explorer">
        <h1>Messages</h1>
        {
          (this.props.info.mailBox !== undefined) ? this.props.info.mailBox.map(mail => {
            return <MailThumbnail
                    mail={mail}
                    />
          }) : null
      }
    </div>
  );
}
}

export default Explorer;
