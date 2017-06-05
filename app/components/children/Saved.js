// Include React
var React = require("react");

// Helper for making AJAX requests to our API
var helpers = require("../utils/helpers");

// Create the Saved component
var Saved = React.createClass({

	//function to post articles to the DB if they are saved
	deleteArticleFromDb: function(event) {
		//call postSavedArticles helper function to make an ajax call to the API
		helpers.deleteSavedArticle(this.props.articles[event.target.value]).then(function() {
			console.log("Deleted!");

			//once we have an article, run a get to display the newley added article
			helpers.getSavedArticles().then(function(response) {
				this.props.parentSetSaved(response.data);
			}.bind(this));

		}.bind(this));
	},

	//render the component
  render: function() {
    return (
    	<div className="saved-container">
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Saved Articles</h3>
				</div>
				<div className="panel-body">
					{this.props.articles.map(function(result, i) {
						return (
							<div className="saved-articles" key={i}>
								<h3>{result.title}</h3>
								<p>{result.date}</p>
								<a href={result.url}>{result.url}</a>
								<br />
								<button className="btn btn-primary" id="delete-article-button" type="button" value={i} onClick={this.deleteArticleFromDb}>Delete Article</button>
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
module.exports = Saved;
