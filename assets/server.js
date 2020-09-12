// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("../config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("../models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//
// ROUTES
//

var Insults = require("../models/insults.js");

app.get("/api/all", (req, res) => {
  // function to pull all insults
  Insults.findAll({}).then((results) => {});
});
app.get("/api/soft", (req, res) => {
  // function to pull only softer insults
  Insults.findAll({
    where: { intensity: 1 },
  }).then((results) => {});
});
app.post("/api/new", (req, res) => {
  // function to send the new insult to the DB
});

//
//
//

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
