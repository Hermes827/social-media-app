import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class Mailbox extends React.Component {

  render(){
  return (
    <div className="App">
        Mailbox
        <Link to="/homepage/user">
          <Button variant="primary">Back</Button>
        </Link>
    </div>
  );
}
}

export default Mailbox;
