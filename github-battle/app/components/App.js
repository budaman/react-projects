var React = require('react');//iskvieciam frameworka
var Popular = require('./Popular'); //nuo cia iki result yra komponentai
var Home = require('./Home');
var Nav = require('./Nav');
var Battle = require('./Battle');
var Results = require('./Results');
var ReactRouter = require('react-router-dom');//isikvieciam Router
var Router = ReactRouter.BrowserRouter;//routerio viduje galima sudelioti visus komponentus
var Route = ReactRouter.Route;//su rout pagalba galima sakyti, kada koks componentas iskvieciamas
var Switch = ReactRouter.Switch; //cia kad handlinti, jeigu puslapis nerastas
//nes kitu atveju tiesiog atidarys Router componenta


//sitas yra pagrindinis componentas, i kuri sueina visi kiti komponentai


class App extends React.Component {
   render() {
      return (
      <Router>
         <div className="container">
            <Nav />
            <Switch> {/* siame elemte saugoma visa informacija kokie puslapiai jau sukurti
                         ir jeigu kazkurio is ju neras, tada route is kart renderins funkcija
                         kuri iskviecia kazkoki error pranesima */}
               <Route exact path="/" component={Home} />
               <Route exact path="/battle" component={Battle} />
               <Route path="/popular" component={Popular} />
               <Route path="/battle/results" component={Results} />
               <Route render={function(){
                  return <p>Not Found</p> //cia butina rendinti, nes tiesiogiai html negali rasyti be komponentu ar funkcijos
               }} />
            </Switch>
         </div>
      </Router>
      )
   }
}

module.exports = App; //reikia exportuoti, kad galetu kiti
//komponentai pasiimti su require metodu
