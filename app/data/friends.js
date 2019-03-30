// ======================================================
// DATA
// This data file will hold all of the users who completed the survey.
// Initially it is set to a dummy user.
// ======================================================

var friends = [
  {
    name: "Twiggy",
    photo: "https://www.dropbox.com/s/cuexp7xoh9dcb6d/twiggy.jpg?dl=0",
    scores: [1, 1, 1, 1, 1, 1, 2, 1, 1, 1]
  }, {
    name: "Kong",
    photo: "https://tarzan.fandom.com/wiki/Gorillas?file=5acfb95be73c8.jpg",
    scores: [1, 1, 1, 1, 5, 4, 2, 1, 1, 5]
  }, {
    name: "Frank",
    photo: "https://villains.fandom.com/wiki/Frank-N-Furter?file=Frankhd.jpg",
    scores: [3, 4, 5, 2, 3, 3, 2, 3, 2, 1]
  }, {
    name: "Momo",
    photo: "https://www.dropbox.com/s/xk7oavfdtzn9x8a/momo.jpg?dl=0",
    scores: [5, 3, 4, 5, 5, 5, 4, 5, 5, 5]
  }
];

// Export the array to make it accessible to other files.
module.exports = friends;