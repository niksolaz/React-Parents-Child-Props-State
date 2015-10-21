(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var WelcomeMessage = React.createClass({
	displayName: "WelcomeMessage",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "welcomeMessage" },
			React.createElement(
				"h1",
				null,
				"Welcome on the tutorial React by Nik Solaz"
			),
			React.createElement(
				"li",
				null,
				React.createElement(PropsMessage, null)
			),
			React.createElement(
				"li",
				null,
				React.createElement(StatesMessage, null)
			)
		);
	}
});

var PropsMessage = React.createClass({
	displayName: "PropsMessage",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "propsMessage" },
			"Props"
		);
	}
});

var StatesMessage = React.createClass({
	displayName: "StatesMessage",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "statesMessage" },
			"State"
		);
	}
});

ReactDOM.render(React.createElement(WelcomeMessage, null), document.getElementById("myMessageID"));

},{}]},{},[1]);
