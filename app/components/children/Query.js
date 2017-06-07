// Include React
var React = require("react");

var Results = require('./Results.js');

// // Create the Saved component
var Query = React.createClass({

	//render the component
	render: function() {
		return (
			<div className="query-container">
				<Results 
					articles={this.props.articleArray}
					parentSetSaved={this.props.parentSetSaved} 
				/>
			</div>
		);
	}
	});

// Export the component back for use in other files
module.exports = Query;
