// Include React
var React = require("react");

// Create the Search component
var Search = React.createClass({
  render: function() {
    return (
    	<div className="search-container">
				<div className="panel panel-default search-panel">
					<div className="panel-heading">
						<h3 className="panel-title">Search</h3>
					</div>
					<div className="panel-body">
						<form>
						  <div className="form-group">
						    <label htmlFor="topic-input">Topic</label>
						    <input type="text" className="form-control" id="topic-input" placeholder="Topic"/>
						  </div>
						  <div className="form-group">
						    <label htmlFor="start-year-input">Start Year</label>
						    <input type="text" className="form-control" id="start-year-input" placeholder="Start Year"/>
						  </div>
						  <div className="form-group">
						    <label htmlFor="end-year-input">End Year</label>
						    <input type="text" className="form-control" id="end-year-input" placeholder="End Year"/>
						  </div>
						  <p><a className="btn btn-primary btn-lg search-button" href="#" role="button">Search</a></p>
						</form>
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
