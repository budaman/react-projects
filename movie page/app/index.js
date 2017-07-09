var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App'); //galima jo reikalauti,
//kuomet jis tame nurodytame pathe yra exportuotas,
//tarkim react-dom irgi yra exportuoti





ReactDOM.render(
   <App/>,
   document.querySelector('#app')
);

var li =  document.querySelectorAll('li');
