// Include React
var React = require("react");
var Search = require('./children/Search.js');
var Saved = require('./children/Saved.js');

var helpers = require("./utils/helpers");

// Create the Main component
var Main = React.createClass({

	//set initial state
	getInitialState: function() {
		return { savedArticles: [] };
	},

	//function to update savedArticles value
	setSavedArticles: function(articles) {
		this.setState({ savedArticles: articles });
	},

	//when the component mounts get saved articles to display
	componentDidMount: function() {
		// Get the latest saved articles.
		helpers.getSavedArticles().then(function(response) {

			if (response !== this.state.savedArticles) {
				this.setState({ savedArticles: response.data });
			}
		}.bind(this));
	},

	//render main component
	render: function() {
		return (
			<div className="main-container">
				<div className="jumbotron">
					<h1>New York Times Article Scrubber (React)</h1>
					<p>Search for articles of interest</p>
				</div>
				<div className="container">
					<Search parentSetSaved={this.setSavedArticles} />
					<Saved 
						articles={this.state.savedArticles}
						parentSetSaved={this.setSavedArticles} 
					/>
				</div>
			</div>
		);
	}
});

// Export the component back for use in other files
module.exports = Main;
