import React, { Component } from 'react';
import Main from './Main';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



class App extends Component {

 constructor(props) {
    super(props);
    this.state = {
      value: false
   }
this.test = this.test.bind(this);
}


test() {
   if(this.state.value===false) {
      this.setState({
         value: true
      })
   } else {
      this.setState({
         value: false
      })
   }
}


  render() {
     const transitionOptions = {
       transitionName: "fade",
       transitionEnterTimeout: 500,
       transitionLeaveTimeout: 500
     }
    return (
   <ReactCSSTransitionGroup {...transitionOptions}>
   <button
      onClick={this.test}
   />

{this.state.value && <div>
   <Main />
</div>}
   </ReactCSSTransitionGroup>
);
  }
}

export default App;
