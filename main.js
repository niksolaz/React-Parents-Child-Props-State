"use strict";

var WelcomeMessage = React.createClass({
  displayName: "WelcomeMessage",

  render: function () {
    return React.createElement(
      "h1",
      null,
      "Welcome on Tutorial"
    );
  }
});

ReactDOM.render(<welcomeMessage />, document.getElementById("myID"));