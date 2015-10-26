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

	loadCommentsFromServer: function loadCommentsFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: (function (data) {
				this.setState({ data: data });
			}).bind(this),
			error: (function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}).bind(this)
		});
	},

	getInitialState: function getInitialState() {
		return { data: [] };
	},

	componentDidMount: function componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},

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
			React.createElement(CommentList, { data: this.state.data }),
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
			"CommentList",
			commentNodes
		);
	}
});

var CommentForm = React.createClass({
	displayName: "CommentForm",

	handleSubmit: function handleSubmit(e) {
		e.preventDefault();
		var author = this.refs.author.value.trim();
		var text = this.refs.text.value.trim();
		if (!text || !author) {
			return;
		}
		//TODO: send request to the server
		this.refs.author.value = '';
		this.refs.text.value = '';
		return;
	},

	render: function render() {
		return React.createElement(
			"form",
			{ className: "commentForm", onSubmit: this.handleSubmit },
			"CommentForm",
			React.createElement("input", { type: "text", placeholder: "Your name", ref: "author" }),
			React.createElement("input", { type: "text", placeholder: "Say something...", ref: "text" }),
			React.createElement("input", { type: "submit", value: "Post" })
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

var data = [{ author: "First Comment", text: "This is one comment" }, { author: "Another Comment", text: "This is *another* comment" }];

//rederize Main Component "CommentBox"
ReactDOM.render(React.createElement(CommentBox, { url: "/api/comments", pollInterval: 2000 }), document.getElementById("myContent"));

},{}]},{},[1]);
