import React, { Component } from 'react';
import Main from './Main';
import './App.css';



class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      value: false
   }
}



  render() {
     const transitionOptions = {
       transitionName: "fade",
       transitionEnterTimeout: 500,
       transitionLeaveTimeout: 500
     }
    return (
   <Main />
);
  }
}

export default App;
