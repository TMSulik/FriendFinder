// ======================================================
// DATA
// This data file will hold all of the users who completed the survey.
// Initially it is set to a dummy user.
// ======================================================

var friends = [
  {
    name: "Twiggy",
    photo: "https://www.npg.org.uk/collections/search/use-this-image.php?mkey=mw197366",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
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
    photo: "https://knowyourmeme.com/memes/momo-challenge/photos/sort/oldest",
    scores: [5, 3, 4, 5, 2, 3, 4, 2, 2, 2]
  }
];

// Export the array to make it accessible to other files.
module.exports = friends;