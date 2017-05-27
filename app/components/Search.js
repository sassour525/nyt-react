// Include React
var React = require("react");

// Create the Search component
var Search = React.createClass({
  render: function() {
    return (
    	<div className="search-container">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Search</h3>
					</div>
					<div className="panel-body">
						<p><a className="btn btn-primary btn-lg search-button" href="#" role="button">Search</a></p>
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Results</h3>
					</div>
					<div className="panel-body">
						<h2>Results go here</h2>
					</div>
				</div>
			</div>
    );
  }
});

// Export the component back for use in other files
module.exports = Search;
