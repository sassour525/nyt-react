// Include React
var React = require("react");

// Create the Saved component
var Saved = React.createClass({

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
								<button className="btn btn-primary" id="delete-article-button" type="button" value={i}>Delete Article</button>
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
