var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
   render(){
      var f = function(name){
         console.log('hello, ' + name)
      }

      var executor = function(fn, name) {
         fn(name);
      }

      executor(f, "Mantvydas");




      return(
         <div className="home-container">
            <h1>Github Battle: Battle your friends... and stuff.</h1>
            <Link className="button" to="/battle">
               Battle
            </Link>
         </div>
      )
   }


}

module.exports = Home;
