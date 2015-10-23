"use strict";

var WelcomeMessage = React.createClass({
  
  render: function() {
    return (
	    	<div className="welcomeMessage">
	    		<section>
		    	<h1>
		    	Welcome on the tutorial React by Nik Solaz
		    	</h1>    	
			    	<li><PropsMessage/></li>
			    	<li><StatesMessage /></li>
			    	<li><ParentsMessage /></li>
			    	<li><ChildrensMessage /></li>
			    <CommentList />
			    </section>
			    <section>
			    	<MainList />
			    </section>
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
      <section className="commentList">
        <Comment author="Props Author">This is one comment using "this.props.author"</Comment>
        <p>The author is a value property. We have associated in this case the value Props, how could we give Author any other name</p>
        <Comment author="Props Children">This is *another* comment using "this.props.children"</Comment>
        <p>With children recall the "author's name" with another name</p>
      </section>
    );
  }
});

var MainList =  React.createClass({
	render: function(){
		return (
			<section className="mainList">
				<ul>
					<li><UnderList food="Coffee"/></li>
					<li><UnderList food="Tea"/></li>
					<li><UnderList food="Milk"/></li>
				</ul>
			</section>
		);
	}
});

var UnderList =  React.createClass({
	render: function(){
		return (
			<div className="underList">
				
				  <p className="commentFood">{this.props.food}</p>
				  <p>{this.props.children}</p>
				  <p>{this.props.children}</p>
				
			</div>
		);
	}
});

ReactDOM.render(
	<WelcomeMessage />, 
	document.getElementById("myMessageID")
	);