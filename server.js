// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var mysql = require("mysql");
var path = require("path");
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'friends_db'
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
app.get("/questions", function(req, res){
  connection.query("SELECT * FROM questions;", function(err, data){
    console.log(data);
    res.json(data);
  })
})

app.get("/api/friends", function(req, res) {
    // res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var newfriend = req.body
    connection.query("INSERT INTO friends (friends_name, picture_link) VALUES (?, ?) ", [newfriend.name, newfriend.photo], function(err, result){
      if (err) throw err
      console.log(result);
    })
    res.json(newfriend);
    // res.json(true);
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"));
  });


  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));



  });
// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
