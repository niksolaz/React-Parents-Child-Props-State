(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
/*
	- CommentBox
        - CommentList
          - Comment
        - CommentForm
*/
var CommentBox = React.createClass({
	displayName: "CommentBox",

	render: function render() {
		//add component CommentList and CommentBox
		return React.createElement(
			"div",
			{ className: "commentBox" },
			React.createElement(
				"h1",
				null,
				"Comments"
			),
			React.createElement(CommentList, { data: this.props.data }),
			React.createElement(CommentForm, null)
		);
	}
});

var CommentList = React.createClass({
	displayName: "CommentList",

	render: function render() {
		var commentNodes = this.props.data.map(function (comment) {
			return React.createElement(
				Comment,
				{ author: comment.author },
				comment.text
			);
		});
		return React.createElement(
			"div",
			{ className: "commentList" },
			commentNodes
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

	//protect from an XSS attack
	rawMarkup: function rawMarkup() {
		var rawMarkup = marked(this.props.children.toString(), { sanitize: true });
		return { __html: rawMarkup };
	},
	render: function render() {
		//using propieties author and markup
		return React.createElement(
			"div",
			{ className: "comment" },
			React.createElement(
				"h2",
				{ className: "commentAuthor" },
				this.props.author
			),
			React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup() })
		);
	}
});

var data = [{ author: "First Comment", text: "This is one comment" }, { author: "Second Comment", text: "This is second comment" }, { author: "....", text: "....." }, { author: "Another Comment", text: "This is *another* comment" }];

//rederize Main Component "CommentBox"
ReactDOM.render(React.createElement(CommentBox, { data: data }), document.getElementById("myContent"));

},{}]},{},[1]);
