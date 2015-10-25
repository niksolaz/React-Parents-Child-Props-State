"use strict";

var CommentBox = React.createClass({
  
  render: function() {
    return (
		<div className="commentBox">
			<h1>Comments</h1>
			<CommentList />
			<CommentForm />
		</div>    	
    );
  }
});

var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
				This is a component CommentList
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return (
			<div className="commentForm">
				This is a component CommentForm
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />, 
	document.getElementById("myContent")
	);