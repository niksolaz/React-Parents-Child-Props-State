"use strict";
/*
	- CommentBox
        - CommentList
          - Comment
        - CommentForm
*/
var CommentBox = React.createClass({

	loadCommentsFromServer: function(){
		$.ajax({
			url:this.props.url,
			dataType:'json',
			cache:false,
			success:function(data){
				this.setState({data:data});
			}.bind(this),
			error: function(xhr,status,err){
				console.error(this.props.url,status,err.toString());
			}.bind(this)
		});
	},

	getInitialState: function(){
		return {data:[]};
	},

	componentDidMount: function(){
		this.loadCommentsFromServer();
    	setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
  
    render: function() {
  	//add component CommentList and CommentBox
        return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>    	
        );
    }
});

var CommentList = React.createClass({

	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return(
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				CommentList
		        {commentNodes}
		    </div>
		);
	}
});

var CommentForm = React.createClass({

	render: function(){
		return (
			<form className="commentForm">
				CommentForm
				<input type="text" placeholder="Your name"/>
				<input type="text" placeholder="Say something..."/>
				<input type="submit" value="Post"/>
			</form>
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
		//using propieties author and markup
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
});

var data = [
	{author: "First Comment", text: "This is one comment"},
	{author: "Another Comment", text: "This is *another* comment"}
];

//rederize Main Component "CommentBox"
ReactDOM.render(
	<CommentBox url="/api/comments" pollInterval={2000}/>, 
	document.getElementById("myContent")
	);