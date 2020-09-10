const mysql = require("mysql");
const connection = require("./CroolDBConnection.js");

// The insults must be retrieved from the database

// NOT SURE IF THIS WORKS. LOOK LATER.
connection.query("SELECT * FROM insults", function(err, result, fields) {
  if (err) throw err;
  console.log(result);
});

// Insults must be pushed into chat bubbles belonging to the bot, in ascending recency

// User's input must be pushed up into a bubble at the bottom of the chat

// function to grab input of textarea & store it for use when user clicks send
let inputVal;
const inputArr = [];

function getInputValue() {
  inputVal = $("#userInput").val();
  inputArr.push(inputVal);
  pushUserBubble();
}

// function to plug input of textarea into a chat bubble and clear input field

function pushUserBubble() {
  let bubble = $("<p>").html($("#userInput").val());
  bubble.addClass("user-bubble");
  $("#newBub").append(bubble);
  $("#userInput").val("");
  console.log("bubble pushed");
}

// reply is determined to be yes/no/other

function determineIO() {
  let userResponse = inputVal.toLowerCase();
  console.log("determineIO running.");
  console.log(userResponse);
  if (isAffirmative(userResponse)) {
    console.log("answer is yes");
  } else if (isNegative(userResponse)) {
    console.log("answer is no");
  } else {
    console.log("answer is something else");
  }
}

const yesArr = [
  "yeah",
  "y",
  "ya",
  "yea",
  "ye",
  "mhm",
  "yes",
  "mhmm",
  "i do",
  "i have",
  "of course",
];
const noArr = [
  "no",
  "nah",
  "n",
  "never",
  "i haven't",
  "i don't",
  "i'm not",
  "of course not",
];

function isAffirmative(text) {
  for (let i = 0; i < yesArr.length; i++) {
    if (text == yesArr[i]) {
      return true;
    }
  }
  return false;
}

function isNegative(text) {
  for (let i = 0; i < noArr.length; i++) {
    if (text == noArr[i]) {
      return true;
    }
  }
  return false;
}

// function to categorize the input

// set timeout function to add a realistic feature of someone thinking, not too long!

// a random insult is pulled from database from yes/no/other category is pushed to the bot chat bubble and then remove it from future insults

// function to actually call up the insult

// function that accepts text and pushes it to a bot-bubble
function pushCroolBubble(text) {
  let croolBubble = $("<p>").html(text);
  croolBubble.addClass("bot-bubble");
  $("#newBub").append(croolBubble);
}

// function to put response into a chat bubble and push it to the bottom of the chat

// that insult should be taken out of future responses to not be repeated

// feature to add insults to database

function receiveInsult() {
  pushCroolBubble("Okay, let's hear the best you've got.");
  // UNFINISHED
}
