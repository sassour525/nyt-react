//Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Requiring Article models
var Article = require("./models/Article.js");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Make public a static dir
app.use(express.static("./public"));

// Database configuration with mongoose
var databaseUri = 'mongodb://localhost/nytreact';

if (process.env.MONGODB_URI) {
    // mongoose.connect('mongodb://heroku_jqxz2z07:51a2i020qinenhcpk2hem1hicu@ds149481.mlab.com:49481/heroku_jqxz2z07');
} else {
    mongoose.connect(databaseUri);
}

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes
//Route to get saved articles
app.get('/api/saved', function(req, res) {
	Article.find({}).exec(function(err, doc) {
		if (err) { 
			console.log(err);
		} else {
			res.send(doc);
		}
	});
});

//Route to post saved articles
app.post('/api/saved', function(req, res) {
	console.log(req.body.article);
	Article.create({
		title: req.body.article.title,
		date: req.body.article.date,
		url: req.body.article.turl,
	}, function(err) {
		if (err) {
			console.log(err);
		} else {
			res.send("Saved Article");
		}
	});
});

//Route to delete saved articles
app.delete('/api/saved', function(req, res) {

});

//Route to display main index.html page
app.get('/', function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

// Listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log("App running on port 3000!");
});