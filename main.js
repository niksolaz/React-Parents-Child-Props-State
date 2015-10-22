"use strict";

var WelcomeMessage = React.createClass({
  
  render: function() {
    return (
	    	<div className="welcomeMessage">
		    	<h1>
		    	Welcome on the tutorial React by Nik Solaz
		    	</h1>    	
			    	<li><PropsMessage/></li>
			    	<li><StatesMessage /></li>
			    	<li><ParentsMessage /></li>
			    	<li><ChildrensMessage /></li>
			    <CommentList />
	    	</div>
    	 );
  }
});

var PropsMessage = React.createClass({

	render: function(){
		return (
			<div className="propsMessage">
				Props
			</div>
		);
	}
});

var StatesMessage = React.createClass({

	render: function(){
		return (
			<div className="statesMessage">
				State
			</div>
		);
	}
});

var ParentsMessage = React.createClass({

	render: function(){
		return (
			<div className="parentsMessage">
				Parents
			</div>
		);
	}
});

var ChildrensMessage = React.createClass({

	render: function(){
		return (
			<div className="childrensMessage">
				Childrens
			</div>
		);
	}
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment using "this.props.author"</Comment>
        <Comment author="Jordan Walke">This is *another* comment using "this.props.children"</Comment>
      </div>
    );
  }
});

ReactDOM.render(
	<WelcomeMessage />, 
	document.getElementById("myMessageID")
	);