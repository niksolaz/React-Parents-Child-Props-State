/*
Create basic template Main.js 
*/
//Call dependencies
var React = require('react');          
var ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Welcome on the tutorial React!</h1>, // this appear in index.html from <div>
  document.getElementById('myID') // 'myID' is id from <div> in index.html
);