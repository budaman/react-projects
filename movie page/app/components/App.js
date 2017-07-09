var React = require('react');
var Popular = require('./Popular');

class App extends React.Component {
   render() {
      return (
      <div className="container">
            <Popular />
      </div>
      )
   }
}

module.exports = App; //reikia exportuoti, kad galetu kiti
//komponentai pasiimti su require metodu
