(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var CommentBox = React.createClass({
	displayName: "CommentBox",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"Comments"
			),
			React.createElement(CommentList, null),
			React.createElement(CommentForm, null)
		);
	}
});

var CommentList = React.createClass({
	displayName: "CommentList",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentList" },
			"CommentList",
			React.createElement(
				Comment,
				{ author: "John Doe" },
				"This is one comment"
			),
			React.createElement(
				Comment,
				{ author: "Mario Rossi" },
				"This is *another* comment"
			)
		);
	}
});

var CommentForm = React.createClass({
	displayName: "CommentForm",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "commentForm" },
			"CommentForm"
		);
	}
});

var Comment = React.createClass({
	displayName: "Comment",

	render: function render() {
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author
			),
			this.props.children
		);
	}
});
ReactDOM.render(React.createElement(CommentBox, null), document.getElementById("myContent"));

},{}]},{},[1]);
