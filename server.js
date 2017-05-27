//Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Requiring our Note and Article models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Use express-handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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
app.get('/api/saved', function(req, res) {

});

app.post('/api/saved', function(req, res) {

});

app.delete('/api/saved', function(req, res) {

});

app.get('/', function(req, res) {

});

// Listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log("App running on port 3000!");
});