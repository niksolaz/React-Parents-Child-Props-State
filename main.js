"use strict";

var CommentBox = React.createClass({
  
  render: function() {
    return (
		<div className="commentBox">
			This is a Comment Box
		</div>    	
    );
  }
});

ReactDOM.render(
	<CommentBox />, 
	document.getElementById("myContent")
	);