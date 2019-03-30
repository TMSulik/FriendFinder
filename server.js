const express = require("express");
const app = express();
// const routes = require('./app');
const PORT = process.env.PORT || 8080;

// Your server.js file should require the basic npm packages we've used in class: express and path.
// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// app.use('/', routes);

app.use(express.static("public"));
app.use('/css',express.static(__dirname +'/css'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// require("./app/public/app.js")(app);
// require("./app/public/style.css")(app);

// app.use('/jquery', express.static(__dirname + './app/public/app.js'));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
