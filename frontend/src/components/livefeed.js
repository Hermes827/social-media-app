import React from 'react';
import Button from 'react-bootstrap/Button';
import Update from './update'

class Livefeed extends React.Component {

  constructor(){
    super()
    this.state = {
      updates: []
    }
  }

  componentDidMount(){
  var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://localhost:4000/updates", requestOptions)
  .then(response => response.json())
  .then(result => {
    this.setState({
      updates: result
    })
  })
  .catch(error => console.log('error', error));
  }

  // random(){
  //   // this.state.updates.map(update => {
  //   //   console.log(update)
  //   // })
  //   console.log(this.state.updates[0])
  // }


  render(){
  return (
    <div className="livefeed">
      <div>live feed</div>
      {this.state.updates.map(update => {
        return <Update key={update._id} info={update} />
      })}
      <form>
        <label>make an update</label>
        <input></input>
        <Button>submit</Button>
      </form>
    </div>
  );
}
}

export default Livefeed;
