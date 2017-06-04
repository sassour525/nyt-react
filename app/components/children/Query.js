// Include React
var React = require("react");

var Results = require('./Results.js');

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Create the Saved component
var Query = React.createClass({

	//set initial state
	getInitialState: function() {
		return {
			articleArray: []
		};
	},

	//when the component updates, run the search query on NYT api
	componentDidUpdate: function() {
		//call our runQuery helper function to execute ajax call to NYT API
		helpers.runQuery(this.props.topic, this.props.startYear, this.props.endYear).then(function(data) {
			this.setState({ articleArray: data});
			console.log(this.state.articleArray);
		}.bind(this));
	},

	//render the component
	render: function() {
		return (
			<div className="query-container">
				<Results 
					articles={this.state.articleArray}
					parentSetSaved={this.props.parentSetSaved} 
				/>
			</div>
		);
	}
});

// Export the component back for use in other files
module.exports = Query;
