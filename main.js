"use strict";
/*
	- CommentBox
        - CommentList
          - Comment
        - CommentForm
*/
var CommentBox = React.createClass({
  
  render: function() {
    return (
		<div className="commentBox">
			<h1>Comments</h1>
			//add component CommentList and CommentBox
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
				CommentList
				//add component Comment and call propieties author
				<Comment author="John Doe">This is one comment</Comment>
				<Comment author="Mario Rossi">This is *another* comment</Comment>
			</div>
		);
	}
});

var CommentForm = React.createClass({

	render: function(){
		return (
			<div className="commentForm">
				CommentForm
			</div>
		);
	}
});

var Comment = React.createClass({
	//protect from an XSS attack
	rawMarkup: function() {
		var rawMarkup = marked(this.props.children.toString(),{sanitize:true});
		return { __html:rawMarkup };
	},
	render: function(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					//using propieties author
					{this.props.author}
				</h2>
				//use markup
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
});

//rederize Main Component "CommentBox"
ReactDOM.render(
	<CommentBox />, 
	document.getElementById("myContent")
	);