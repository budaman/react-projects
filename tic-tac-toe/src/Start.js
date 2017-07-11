import React, { Component } from 'react';
import logo from './logo.svg';

class Start extends Component {

   constructor(props) {
      super(props);
      this.state = {
        bgCover: false,
        title: false,
        logo: false,
        input: false
     }
  }

   componentDidMount () {
      setTimeout(function() { this.setState({bgCover: true}); }.bind(this), 5);
      setTimeout(function() { this.setState({title: true}); }.bind(this), 2000);
      setTimeout(function() { this.setState({logo: true}); }.bind(this), 2000);
      setTimeout(function() { this.setState({input: true}); }.bind(this), 3100);
   }

   render() {
      return (
        <div className="animationContainer">
        <div className={"bgCover " + (this.state.bgCover ? 'bgCoverAnimation' : '')}>
        </div>
        <div className="logoCont">
        <div className={'logo ' + (this.state.logo ? 'logoAnimation' : '')}></div>
         </div>
        <h3 className={"title " + (this.state.title ? 'titleAnimation' : '')}>
         <span style={{color:  '#FFC914'}}>Tic</span>-
        <span style={{color:  '#001011'}}>Tac</span>-
        <span style={{color:  '#FFC914'}}>Toe</span> </h3>
        <div className={"userInput "+ (this.state.input ? 'userInputAppears' : '')}>
           <input
             className="input"
             type="text"
             placeholder="PlayerOne"
           />
           <input
             className="input"
           type="text"
           placeholder="PlayerTwo"
          />
          <button className="play">Play!</button>
         </div>
        </div>
      );
   }

}

export default Start;
