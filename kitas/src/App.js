import React, { Component } from 'react';
import './App.css';
import Local from './Local';
import Nav from './Nav';
import FullNav from './FullNav';
import Apzvalgos from './components/Apzvalgos';

var ReactRouter = require('react-router-dom');//isikvieciam Router
var Router = ReactRouter.BrowserRouter;//routerio viduje galima sudelioti visus komponentus
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;




class App extends Component {

   constructor() {
        super();
        this.state = {
            navOn: false,
            pages: ['apžvalgos', 'straipsniai', 'apie']
        };
        this.handleClick = this.handleClick.bind(this);
    }
   handleClick() {
      this.setState({
         navOn: !this.state.navOn
      })
      console.log(this.state.navOn)
  }

  render() {
    return (
      <div className="container">
      <FullNav
         navOn={this.state.navOn}
         pages={this.state.pages}
         handleClick={this.handleClick}
       />
      <Nav
         handleClick={this.handleClick}
       />
      <Router>
            <Switch>
               <Route exact path="/" render={()=><Local handleClick={this.handleClick}/>}/>
               <Route exact path="/apzvalgos" render={()=><Apzvalgos pages={this.state.pages} />}/>
               <Route render={function(){
                  return <p>Tokio puslapio nėra.</p>
               }} />
            </Switch>

      </Router>
      </div>
    );
  }
}

export default App;
