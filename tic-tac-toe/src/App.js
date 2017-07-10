import React, { Component } from 'react';
import Main from './Main';
import './App.css';



class App extends Component {

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
      this.state.board[index] = this.state.currentTurn;
      this.setState({
         board: this.state.board,
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
     var tikrinti = this.state.checkForWinner;
    return (
   <Main />
);
  }
}

export default App;
