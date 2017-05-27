// Include React
var React = require("react");
var Search = require('./Search.js');
var Saved = require('./Saved.js');

// Create the Main component
var Main = React.createClass({
  render: function() {
    return (
      <div className="main-container">
				<div className="jumbotron">
					<h1>New York Times Article Scrubber (React)</h1>
					<p>Search for articles of interest</p>
				</div>
				<div className="container">
					<Search />
					<Saved />
				</div>
			</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
