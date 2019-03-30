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

    friendData.push(req.body);

    var mySurvey = req.body.scores;
    var othersSurveys = [];
    var othersProfiles = [];

    // Get survey results for other users
    for(var i = 0; i < friendData.length-1; i++) {
      othersSurveys.push(friendData[i].scores);
    }

    // Get names and pics of other users
    // for(var i = 0; i < friendData.length-1; i++) {
    //   othersProfiles.push([friendData[i].name, friendData[i].photo]);
    // }

    // Score the differences between any pair of surveys
    var calculateDifference = function(survey_a, survey_b) {
      var cumulativeDifference = 0;
      for(var i = 0; i < survey_a.length; i++) {
        if(survey_a[i] > survey_b[i]) {
          cumulativeDifference += survey_a[i] - survey_b[i];
        }
        if(survey_a[i] < survey_b[i]) {
          cumulativeDifference += survey_b[i] - survey_a[i];
        }
      }
      return cumulativeDifference;
    };

    // Find the response that most nearly matches the user's
    var bestMatch = function () {
      var best = []; 
      var difference = 40; // Max possible difference
      for(var i = 0; i < othersSurveys.length; i++) {
        if(calculateDifference(mySurvey, othersSurveys[i]) < difference) {
          difference = calculateDifference(mySurvey, othersSurveys[i]);
          // best = othersProfiles[i];
          best = friendData[i];
        }
      }
      return best;
    };

    console.log("Best match: ", bestMatch());

    res.json(bestMatch());
  });

};

//   // The code below clears out the friends array.
//   app.post("/api/clear", function(req, res) {
//     // Empty the array
//     friendData.length = [];

//   });
// };
