// Include React
var React = require("react");

var Results = require('./Results.js');

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Create the Saved component
var Query = React.createClass({

	getInitialState: function() {
		return {
			articleArray: []
		};
	},

	componentDidUpdate: function() {
		helpers.runQuery(this.props.topic, this.props.startYear, this.props.endYear).then(function(data) {
			this.setState({ articleArray: data});
			console.log(this.state.articleArray);
		}.bind(this));
	},

	render: function() {
		return (
			<div className="query-container">
				<Results articles={this.state.articleArray} />
			</div>
		);
	}
});

// Export the component back for use in other files
module.exports = Query;
