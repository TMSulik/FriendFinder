// ===========================================================
// LOAD DATA
// Links the routes to a series of "data" sources.
// These data sources hold arrays of information on the friends array.
// =============================================================

var friendData = require("../data/friends");

// =======================================================
// ROUTING
// =======================================================

module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    friendData.push(req.body);
    res.json(true);

    var mySurvey = req.body.scores;
    var othersSurveys = [];

    // Get survey results for other users
    for(var i = 0; i < friendData.length-1; i++) {
      othersSurveys.push(friendData[i].scores);
    }

    // Score the differences between a pair of responses
    var calculateDifference = function(a, b) {
      var result = 0;
      for(var i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
          result += a[i] - b[i];
        }
        if(a[i] < b[i]) {
          result += b[i] - a[i];
        }
      }
      return result;
    };

    // Find the response that matches closest to user's
    var bestMatch = function () {
      var best = []; 
      var difference = 40; // Max possible difference
      for(var i = 0; i < othersSurveys.length; i++) {
        if(calculateDifference(mySurvey, othersSurveys[i]) < difference) {
          difference = othersSurveys[i];
          best = [friendData[i].name, friendData[i].photo];
        }
      }
      return best;
    };
    console.log("Best match: ", bestMatch);
  });

};

//   // The code below clears out the friends array.
//   app.post("/api/clear", function(req, res) {
//     // Empty the array
//     friendData.length = [];

//   });
// };
