// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Create the Saved component
var Results = React.createClass({

  	getInitialState: function() {
    	return { savedArticles: [] };
  	},

	saveArticleToDb: function(event) {
		helpers.postSavedArticles(this.props.articles[event.target.value]).then(function() {
			console.log("Updated!");

			helpers.getSavedArticles().then(function(response) {
				this.setState({ savedArticles: response.data });
			}.bind(this));

		}.bind(this));
	},

	render: function() {
		return (
			<div className="results-container">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Results</h3>
					</div>
					<div className="panel-body">
						{this.props.articles.map(function(result, i) {
							return (
								<div className="returned-articles" key={i}>
									<h3>{result.title}</h3>
									<p>{result.date}</p>
									<a href={result.turl}>{result.turl}</a>
									<br />
									<button className="btn btn-primary" id="save-article-button" type="button" value={i} onClick={this.saveArticleToDb}>Save Article</button>
								</div>
							);
						}.bind(this))}
					</div>
				</div>
				
			</div>
		);
	}
});

// Export the component back for use in other files
module.exports = Results;
