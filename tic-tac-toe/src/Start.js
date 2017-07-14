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
            placeholder={this.props.label}
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
        title: false,
        logo: false,
        input: false,
        introStarts: true,
        playerOne: '',
        playerTwo: ''
     }
     this.handleClick = this.handleClick.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }

   componentDidMount () {
      setTimeout(() => { this.setState({title: true}); }, 700);
      setTimeout(() => { this.setState({logo: true}); }, 700);
      setTimeout(() => { this.setState({input: true}); }, 1500);
   }

   handleChange(id, username){
      this.setState(function(){
         var newState = {};
         newState[id] = username;
         return newState
      })
      this.props.getNames(
         id,
         username,
      )
   }


   handleClick(){
      this.setState({
         introStarts: false,
      })
   }
   render() {

/*-----------------------RETURN ELEMTNS------------------*/



      return (
/*-----------------BEGGINING ANIMATION SECTION ---------------------*/
        <div className={"animationContainer " + (this.state.introStarts ? '' : 'intro-over')}>
        <div className={"bgCover"}>
        </div>
        <div className="logoCont">
        <div className={'logo ' + (this.state.logo ? 'logoAnimation' : '')}></div>
         </div>
        <h3 className={"title " + (this.state.title ? 'titleAnimation' : '')}>
         <span style={{color: '#001011'}}>tic</span>-
        <span style={{color:  'white'}}>tac</span>-
        <span style={{color:  '#001011'}}>toe</span> </h3>


{/*-----------------   GETTING INPUTS  ---------------------*/}
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
            placeholder="Player Two"
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
