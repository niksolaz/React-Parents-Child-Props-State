"use strict";

var WelcomeMessage = React.createClass({
  
  render: function() {
    return (
    	<div className="welcomeMessage">
    	<h1>
    	Welcome on the tutorial React by Nik Solaz
    	</h1>
    	<PropsMessage />
    	</div>
    	 );
  }
});

var PropsMessage = React.createClass({

	render: function(){
		return (
			<div className="propsMessage">
				<li>Props</li>
			</div>
		);
	}
});

ReactDOM.render(
	<WelcomeMessage />, 
	document.getElementById("myMessageID")
	);