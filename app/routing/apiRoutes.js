// ===========================================================
// LOAD DATA
// Link the routes to a series of "data" sources.
// These data sources hold arrays of information on the friends array.
// =============================================================

var friendData = require("../data/friends");

// =======================================================
// ROUTING
// ========================================================

module.exports = function(app) {
  
  // API GET request
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  // API POST request
  // The code below handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object),
  // the JSON is pushed to the appropriate JavaScript array
  // The user fills out a survey. This data is then sent to the server.
  // Then the server saves the data to the friends array)

  app.post("/api/friends", function(req, res) {
    
    friendData.push(req.body);
  
  });

  // The code below clears out the friends array.
  app.post("/api/clear", function(req, res) {
    // Empty the array
    friendData.length = [];

  });
};

// From class lecture
// var db = require('../models');
// module.exports = function(app) {
//   app.get('/api/todos'), function(req, res) {
//     db.Todo.findAll({}).then (function(dbTodo) {
//       res.json(dbTodo);
//     }).catch(function(err) {
//       res.json(err);
//     });
//   };
// };