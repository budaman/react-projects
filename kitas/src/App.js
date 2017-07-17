import React, { Component } from 'react';
import './App.css';
import Local from './Local';
import Nav from './Nav';
import FullNav from './FullNav';
import Apzvalgos from './components/Apzvalgos';
import Straipsniai from './components/Straipsniai';
import Apie from './components/Apie';

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

      <Router>
         <div className="container">
         <FullNav
            navOn={this.state.navOn}
            pages={this.state.pages}
            handleClick={this.handleClick}
         />
         {/*<Nav
            handleClick={this.handleClick}
          /> */}
            <Switch>
               <Route exact path="/" render={()=><Local handleClick={this.handleClick}/>}/>
               <Route exact path="/apzvalgos" render={()=><Apzvalgos pages={this.state.pages} handleClick={this.handleClick} />}/>
               <Route exact path="/straipsniai" render={()=><Straipsniai pages={this.state.pages} handleClick={this.handleClick} />}/>
               <Route exact path="/apie" render={()=><Apie pages={this.state.pages} handleClick={this.handleClick} />}/>
               <Route render={function(){
                  return <p>Tokio puslapio nėra.</p>
               }} />
            </Switch>
            </div>
      </Router>

    );
  }
}

export default App;
