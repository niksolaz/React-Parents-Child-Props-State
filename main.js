"use strict";

var WelcomeMessage = React.createClass({
  
  render: function() {
    return (
	    	<div className="welcomeMessage">
		    	<h1>
		    	Welcome on the tutorial React by Nik Solaz
		    	</h1>    	
			    	<li><PropsMessage /></li>
			    	<li><StatesMessage /></li>
			    	<li><ParentsMessage /></li>
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

ReactDOM.render(
	<WelcomeMessage />, 
	document.getElementById("myMessageID")
	);