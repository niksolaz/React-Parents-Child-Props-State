"use strict";

var WelcomeMessage = React.createClass({
  
  render: function () {
    return (
    	<h1 className="welcomeMessage">
    	Welcome on the tutorial React: Parents Child Props State
    	</h1>
    	 );
  }
});

ReactDOM.render(
	<WelcomeMessage />, 
	document.getElementById("myMessageID")
	);