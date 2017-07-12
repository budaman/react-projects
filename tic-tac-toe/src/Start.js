import React, { Component } from 'react';


class PlayerInput extends Component {
   constructor(props){
      super(props);
      this.state = {
         username: ""
      }
      this.handleChange = this.handleChange.bind(this);
      this.sendInfo = this.sendInfo.bind(this);
   }

   handleChange(e){
      this.setState({
         username: e.target.value
      })
   }

   sendInfo(e) {
      this.props.change(
         this.props.id,
         this.state.username
      )
   }
   render(){
      return (
         <div>
         <input
            id="username"
            className="input"
            type="text"
            placeholder="PlayerOne"
            autoComplete='off'
            onChange={this.handleChange}
            onBlur={this.sendInfo}
         />
         </div>
      )
   }
}

class Start extends Component {

   constructor(props) {
      super(props);
      this.state = {
        bgCover: false,
        title: false,
        logo: false,
        input: false,
        introStarts: true,
        playerOne: '',
        playerTwo: '',
        playIsClicked: ''

     }
     this.handleClick = this.handleClick.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }

   componentDidMount () {
      setTimeout(function() { this.setState({bgCover: true}); }.bind(this), 5);
      setTimeout(function() { this.setState({title: true}); }.bind(this), 1000);
      setTimeout(function() { this.setState({logo: true}); }.bind(this), 1000);
      setTimeout(function() { this.setState({input: true}); }.bind(this), 2100);
   }

   handleChange(id, username){
      this.setState(function(){
         var newState = {};
         newState[id] = username;
         return newState
      })
      this.props.getNames(
         id,
         username
      )
   }

   handleClick(){
      this.setState({
         introStarts: false,
         playIsClicked: true
      })
      console.log(this.state.playerOne + " " + this.state.playerTwo);
   }

   render() {

      return (
        <div className={"animationContainer " + (this.state.introStarts ? '' : 'intro-over')}>
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

           <PlayerInput
             id="playerOne"
             label="Player One"
             className="input"
             change={this.handleChange}
           />
           <PlayerInput
            id="playerTwo"
            label="Player Two"
            placeholder="PlayerTwo"
            change={this.handleChange}
          />
          <button
             className="play"
             onClick={this.handleClick}
             >Play!</button>
         </div>
      </div>
      );
   }

}

export default Start;
