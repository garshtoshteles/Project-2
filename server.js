// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const path = require("path");
// Requiring passport as we've configured it
const passport = require("./config/passport");
// var Insults = require("../models/insults.js");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//
// ROUTES
//

app.get("/api/all", (req, res) => {
  // function to pull all insults
  db.Insults.findAll({}).then((results) => {
    res.json(results);
  });
});
app.get("/api/soft", (req, res) => {
  // function to pull only softer insults
  db.Insults.findAll({
    where: { intensity: 1 },
  }).then((results) => {
    res.json(results);
  });
});
app.post("/api/new", (req, res) => {
  // function to send the new insult to the DB
  db.Insults.create({
    contents: req.body.contents,
    intensity: req.body.intensity,
  }).then(() => {
    res.end();
  });
});

//

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

//

// Syncing our database and logging a message to the user upon success
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
