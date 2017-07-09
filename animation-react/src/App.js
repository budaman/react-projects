import React, { Component } from 'react';
import './App.css';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); // ES5 with npm

class App extends Component {
   constructor(props) {
		super(props);
		this.state = {
      quotes: ['Hey, this is my first post. It comes from REACT state property',
      'This is my second post, it also comes from State prop, and if you want, you can remove it or update it'],
      inputValue: "",
      updateInputValue: "",
      isItUpdate: "",
      elementIndex: null
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.callUpdateEl = this.callUpdateEl.bind(this);
      this.handleUpdateChange = this.handleUpdateChange.bind(this);
	}

callUpdateEl(i) {
   if(this.state.isItUpdate==="") {
   this.setState({
      isItUpdate: i,
      updateInputValue: this.state.quotes[i]
   });
} else {
var quotes = this.state.quotes;
var updating = this.state.updateInputValue;
quotes.splice(this.state.isItUpdate,1,updating);
this.setState({
   isItUpdate: "",
   updateInputValue: ""
})
}
}

handleUpdateChange(event) {
   let value = event.target.value;
   this.setState({
      updateInputValue: value
  })
}


handleChange(event){
 let value = event.target.value;
 this.setState({
    inputValue: value
})
}

handleRemove(i){
   let remove = this.state.quotes
   remove.splice(i,1);
   this.setState({
      quotes: remove
   })
}


handleSubmit(){
   let value = this.state.inputValue;
   let quotes = this.state.quotes;
   let newItems = quotes.concat(value);
   this.setState({
      quotes: newItems,
      inputValue: ""
   })
}


	render() {
      var update = this.state.isItUpdate;

      const todoItems = this.state.quotes.map((quote, i) =>{
         return (

               <div key={i}  className="todo-item">
                  <div className="text">{quote}</div>
                  <button
                     className="remove-btn"
                     onClick={() => this.handleRemove(i)}
                     >Remove</button>
                  <button
                     className="update-btn"
                     onClick={() =>
                        this.callUpdateEl(i)
                  }
                     >Update</button>
                  {update===i && <input
                    className="inputAdd updateInput"
                    type="text-area"
                    placeholder="place your update"
                    value={this.state.updateInputValue}
                    onChange={this.handleUpdateChange}
                 />}
                </div>

         )
      });


		return (
         <div className="container">
            <div className="header">To Do List With <span className="react"> REACT JS</span></div>
            <div className="addIn">
               <input
                  className="inputAdd"
                  onChange={this.handleChange}
                  type="text"
                  placeholder="what is going up?"
                  value={this.state.inputValue}
                   />
               <button
                  className="add"
                  onClick={this.handleSubmit}
                  >Add</button>
            </div>
            <hr/>
            <div className="todo-box">
            {todoItems}
         </div>
         </div>
		);
	}
}

export default App;
