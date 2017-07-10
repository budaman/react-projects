import React, { Component } from 'react';


class Main extends Component {
   constructor(props) {
      super(props);
        this.state = {
           PLAYER_ONE_SYMBOL: 'X',
           PLAYER_TWO_SYMBOL: 'O',
           currentTurn: 'X',
           board: [
              "","","","","","","","",""
           ],
           checkForWinner: false
        }
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
           currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL
        })
        if(this.checkForWinner()) {
           this.setState({
              checkForWinner: true
           })
        }
     }
   }

    render() {
      var cells = this.state.board.map((cell, index) => {
         return <div
              key={index}
              className="square"
              onClick={() => this.handleClick(index)}
              > <div className={this.state.board[index] !== "" ? 'slide' : "" }
                 > {cell} </div> </div>
      } )
       var tikrinti = this.state.checkForWinner;


      return (

     <div className="container">
     <div className="board">

        {cells}

     </div>
     {tikrinti && <div className="victory">Sveikiname</div>}
   </div>

   );
    }
}

export default Main;
