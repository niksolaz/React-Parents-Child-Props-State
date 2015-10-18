/*
Create basic template Main.js 
*/
//Call dependencies
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(React.createElement(
  'h1',
  null,
  'Welcome on the tutorial React!'
), // this appear in index.html from <div>
document.getElementById('myID') // 'myID' is id from <div> in index.html
);

