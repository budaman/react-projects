import React, { Component } from 'react';
import Main from './Main';
import './App.css';
import Start from './Start';


class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      playerOne: '',
      playerTwo: ''
   }
   this.getNames = this.getNames.bind(this);
}


getNames(id, username) {
   this.setState(function(){
      var newState = {};
      newState[id] = username;
      return newState
   }) 
}


  render() {
    return (
   <div className="container">
   <Start
      getNames={this.getNames}
   />
   <Main />
   </div>
);
  }
}

export default App;
