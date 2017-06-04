// Include React
var React = require("react");

var Query = require('./Query.js');
var Results = require('./Results.js');

// Create the Search component
var Search = React.createClass({

	getInitialState: function() {
		return {
			topic: "",
			startYear: "",
			endYear: ""
		}
	},

	handleChange: function(key) {
        return function(e){
            var state = {};
            state[key] = e.target.value;
            this.setState(state);
        }.bind(this);
	},

	handleSubmit: function(event) {
		event.preventDefault();

		console.log(this.state.topic);
		console.log(this.state.startYear);
		console.log(this.state.endYear);

		this.setState({
			topic: this.state.topic,
			startYear: this.state.startYear,
			endYear: this.state.endYear
		});
	},

  	render: function() {
	    return (
	    	<div className="search-container">
				<div className="panel panel-default search-panel">
					<div className="panel-heading">
						<h3 className="panel-title">Search</h3>
					</div>
					<div className="panel-body">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								Topic:
								<input type="text" className="form-control" value={this.state.topic} onChange={this.handleChange('topic')} id="topic-input" placeholder="Topic"/>
								</div>
							<div className="form-group">
								Start Year:
								<input type="text" className="form-control" value={this.state.startYear} onChange={this.handleChange('startYear')} id="start-year-input" placeholder="Start Year"/>
								</div>
							<div className="form-group">
								End Year:
								<input type="text" className="form-control" value={this.state.endYear} onChange={this.handleChange('endYear')} id="end-year-input" placeholder="End Year"/>
							</div>
							<button className="btn btn-primary" type="submit">Submit</button>
						</form>
					</div>
				</div>
				<Query
					topic={this.state.topic}
					startYear={this.state.startYear}
					endYear={this.state.endYear}
				/>
			</div>
	    );
  	}
});

// Export the component back for use in other files
module.exports = Search;
