// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Create the Saved component
var Results = React.createClass({

	//set initial state
	getInitialState: function() {
  		return { savedArticles: [] };
	},

	//function to post articles to the DB if they are saved
	saveArticleToDb: function(event) {
		//call postSavedArticles helper function to make an ajax call to the API
		helpers.postSavedArticles(this.props.articles[event.target.value]).then(function() {

			//once we have an article, run a get to display the newley added article
			helpers.getSavedArticles().then(function(response) {
				this.props.parentSetSaved(response.data);
			}.bind(this));
		}.bind(this));
	},

	//render the component
	render: function() {
		return (
			<div className="results-container">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title"><span className="glyphicon glyphicon-list"></span> Results</h3>
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
