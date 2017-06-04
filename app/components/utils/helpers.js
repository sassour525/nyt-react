// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(topic, yearStart, yearEnd) {

      var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
      url += '?' + $.param({
          'api-key': "97465cece832491fa3bc26a21108435b",
          'q': topic,
          'begin_date': yearStart + "0101",
          'end_date': yearEnd + "0101",
          'page': 1
      });

    return axios.get(url).then(function(response) {
      var returnedArticles = response.data.response.docs;
      var articleArray = [];
      //If get a result, return the result's
      if (returnedArticles) {
        for (var i = 0; i < returnedArticles.length; i++) {
          var articleObject = {
             title: returnedArticles[i].headline.main,
             date: returnedArticles[i].pub_date,
             turl: returnedArticles[i].web_url
          }

          articleArray.push(articleObject);

        }
        return articleArray;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getSavedArticles: function() {
    return axios.get("/api/saved");
  },

  // This function posts new searches to our database.
  postSavedArticles: function(article) {
    console.log(article);
    return axios.post("/api/saved", { article: article });
  },

  // This function posts new searches to our database.
  // deleteSavedArticles: function(article) {
  //   console.log(article);
  //   return axios.delete("/api/saved", { article: article });
  // }
};

// We export the API helper
module.exports = helper;
