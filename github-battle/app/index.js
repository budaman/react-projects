var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App'); //galima jo reikalauti,
//kuomet jis tame nurodytame pathe yra exportuotas,
//tarkim react-dom irgi yra exportuoti


//visas sitas failas skirtas renderinti visa apssa su ReactDOM
//taip pat pasiimti index html, kuris susijungia per webpacka, ir pasiema vieninteli
//elementa esanti html #app conteineri


ReactDOM.render(
   <App/>,
   document.querySelector('#app')
);
