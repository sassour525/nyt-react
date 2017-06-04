// Include React
var React = require("react");
var Search = require('./children/Search.js');
var Saved = require('./children/Saved.js');

var helpers = require("./utils/helpers");

// Create the Main component
var Main = React.createClass({

	getInitialState: function() {
		return { savedArticles: [] };
	},

	componentDidMount: function() {
		// Get the latest history.
		helpers.getSavedArticles().then(function(response) {
			console.log(response);
			if (response !== this.state.savedArticles) {
				this.setState({ savedArticles: response.data });
			}
		}.bind(this));
	},

	render: function() {
		return (
			<div className="main-container">
				<div className="jumbotron">
					<h1>New York Times Article Scrubber (React)</h1>
					<p>Search for articles of interest</p>
				</div>
				<div className="container">
					<Search />
					<Saved articles={this.state.savedArticles} />
				</div>
			</div>
		);
	}
});

// Export the component back for use in other files
module.exports = Main;
