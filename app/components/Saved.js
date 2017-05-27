// Include React
var React = require("react");

// Create the Saved component
var Saved = React.createClass({
  render: function() {
    return (
    	<div className="saved-container">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Search</h3>
					</div>
					<div className="panel-body">
						<h2>Saved Results go here</h2>
					</div>
				</div>
			</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Saved;
