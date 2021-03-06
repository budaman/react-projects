import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var id = 0;

class App extends Component {
   constructor(props) {
		super(props);
		this.state = {
      quotes: [{id: ++id, value: 'Hey, this is my first post. It comes from REACT state property'},
      {id: ++id, value: 'This is my second post, it also comes from State prop, and if you want, you can remove it or update it'}],
      inputValue: "",
      updateInputValue: "",
      isItUpdate: "",
      id: id,
      updateIndex: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleRemove = this.handleRemove.bind(this);
      this.callUpdateEl = this.callUpdateEl.bind(this);
      this.handleUpdateChange = this.handleUpdateChange.bind(this);
	}

callUpdateEl(i) {
   if(this.state.isItUpdate==="") { //tikrinam ar jau buvo paspaustas update mygtukas
   this.setState({    //kadangi nebuvo, todel reikia issaugot ant kurio elemento buvo paspausta jo indexus ir reiksme
      isItUpdate: i, //cia suzinome jo indexa, kita kart kai update spausime, jis vykdys else, nes jau yra reiksme
      updateInputValue: this.state.quotes[i].value, //cia norime, kad rodytu mums teksta, kuri reik updatint
      updateIndex: this.state.quotes[i].id //cia norime issaugoti jo unikalu id, indexas ir id skiriasi
   });
} else {

var newObj = {id: this.state.updateIndex, value: this.state.updateInputValue}; //sukuriam nauja updatinta objekta, kurio indexas yra senas, o reiksme nauja
var quotes = this.state.quotes; //pasiemam visas citatas, kurios buvo pries
quotes.splice(this.state.isItUpdate,1,newObj); //updatinam objektu masyve, norima elementa, pagal jo issaugota indexa ir idedam nauja objekta
this.setState({
   isItUpdate: "",
   updateInputValue: ""
})
}
}

handleUpdateChange(event) { //sita funkcija iskvieciama, tik kai atsiranda ivesties laukas ir jame kazkas raso
   let value = event.target.value; //ziurime ka raso ir apacioje tai priskiriame, kaip updateinput Value
   this.setState({
      updateInputValue: value
  })
}

handleChange(event){ //kai kasnors veda i ivesties laukeli, sita funkcija yra iskviesta
 let value = event.target.value; //stebime ka veda
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
   id++;
   quotes.push({id: id, value: value});
   this.setState({
      quotes: quotes,
      inputValue: ""
   })
}

	render() {
      var update = this.state.isItUpdate;

      const todoItems = this.state.quotes.map((quote, i) =>{
         return (
               <div key={quote.id}  className="todo-item">
                  <div className="text">{quote.value}</div>
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

      const transitionOptions = {
         transitionName: "fade",
         transitionEnterTimeout: 500,
         transitionLeaveTimeout: 500
      }
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
               <ReactCSSTransitionGroup {...transitionOptions}>
            {todoItems}
               </ReactCSSTransitionGroup>
            </div>
         </div>
		);
	}
}
export default App;
