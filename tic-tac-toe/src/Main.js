import React, { Component } from 'react';

class Main extends Component {
   constructor(props) {
      super(props);
        this.state = {
           playerOneVictories: 0,
           playerTwoVictories: 0,
           playerOne: '',
           playerTwo: '',
           PLAYER_ONE_SYMBOL: 'X',
           PLAYER_TWO_SYMBOL: 'O',
           currentTurn: 'X',
           currentPlayer: '',
           playerId: "playerOne",
           board: [
              "","","","","","","","",""
           ],
           checkForWinner: false,
           whoWon: ''
        }
        this.resetBoard = this.resetBoard.bind(this);
   }

   componentWillReceiveProps(props) {
      this.setState({
        currentPlayer: this.props.playerOne
     })
  }

   checkForWinner ()  {
     var winningCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
     var symbols = this.state.board;
     return winningCombos.find(function(combo){
         if(symbols[combo[0]]===symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
           return symbols[combo[0]] } else {
             return false
         }
         })
   }

   handleClick(index) {
     if(this.state.board[index] === "") {

      var nowBoard  = this.state.board; //kad nekeist tiesiogiai state, galima tiesiog susikurti kintamaji ir viskas buna gerai
      nowBoard[index] = this.state.currentTurn;
        this.setState({
           currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
           currentPlayer: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.props.playerTwo : this.props.playerOne,
           playerId: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? 'playerTwo' : 'playerOne'
        })
        if(this.checkForWinner()) {
           var current = [];
           //tik apacioje esanciu budu imanoma atskirti, kuriam priskirti pergale
           //nes jei tiesiai i state ++ darytume, nezinotume kam perduoti pergale
           current['playerOne'] = this.state.playerOneVictories;
           current['playerTwo'] = this.state.playerTwoVictories;
           current[this.state.playerId] ++;

           console.log(current[this.state.playerId]);

           this.setState(()=>{
             var newState = {};
             newState[this.state.playerId + 'Victories'] =  current[this.state.playerId];
             newState['checkForWinner'] = 'true';
             newState['whoWon'] = this.state.currentPlayer;
             console.log(newState)
             return newState
          }
           )
        }
     }
   }

     resetBoard () {
      this.setState({
         board: [
            "","","","","","","","",""
         ],
         checkForWinner: false
      })
   }


    render() {
      var cells = this.state.board.map((cell, index) => {
         return <div
              key={index}
              className="square"
              onClick={() => this.handleClick(index)}
              >
                  <div
                     className={this.state.board[index] !== "" ? 'slide' : "" }
                     style={cell==="X" ? {color: "#EEC643"} : {color: "#F5F7DC"}}
                 > {cell}
                  </div>
               </div>
      } )
       var setIsOver= this.state.checkForWinner;
      return (
     <div className="game-container">

      <div className="currentTurn">
         <div>{this.state.currentPlayer+ ':'}  </div>
         <label className="currentSign"
            style={this.state.currentTurn==="X" ? {color: "#EEC643"} : {color: "#F5F7DC"}}
            > {this.state.currentTurn}  </label>
      </div>

     <div className="board">
        {cells}
     </div>
     {setIsOver && <div className="victory">
        <div className="whoWon">{this.state.whoWon+ ": "}Has Won</div>
        <button
           onClick={this.resetBoard}
           >Play Again? </button>
       </div>}
     <div className="playersBoard">
        <div className="playerResults">
           <div>{this.props.playerOne+ ":"}</div>
           <span>{this.state.playerOneVictories}</span>
        </div>
        <div className="playerResults">
           <div>{this.props.playerTwo + ":"}</div>
            <span>{this.state.playerTwoVictories}</span>
        </div>
     </div>
   </div>
   );
    }
}

export default Main;
