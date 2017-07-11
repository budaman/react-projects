import React, { Component } from 'react';
import Main from './Main';
import './App.css';
import Start from './Start';




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
   <div className="container">
   <Start />
   <Main />
   </div>
);
  }
}

export default App;
