import React, { Component } from 'react';
import Main from './Main';
import './App.css';
import Start from './Start';


class App extends Component {

   state = {
    playerOne: '',
    playerTwo: ''
  }

  getNames = (id, username) => {
     this.setState(function(){
        var newState = {};
        newState[id] = username;
        return newState
     })
  }

  render() {
    return (
   <div className="main-container">
   <Start
      getNames={this.getNames}
   />
   <Main
      playerOne={this.state.playerOne}
      playerTwo={this.state.playerTwo}
   />
   </div>
);
  }
}

export default App;
