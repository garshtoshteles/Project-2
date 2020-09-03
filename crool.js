// The insults must be retrieved from the database

// The bot asks questions about the user to narrow down their insults.

// // The first question is whteher or not they want any specific insults at all or rather just general insults

// // If user gives a response that isn't yes/no to the questions, hurl an insult at them at that moment. "Did you even think that through?"

// The user's slider selection will narrow down insults by intensity

// Insults must be pushed into chat bubbles belonging to the bot, in ascending recency

// User's input must be pushed up into a bubble at the bottom of the chat

// User must be able to give an insult and have the computer recognize it. Keyword?

// -------------------------------------------------------------------------

// this is just me getting my thoughts together -mandy

// load site and first chat bubble from bot says something to begin conversation

//document ready function?

// user replies, reply is pushed into a chat bubble and logged

// function to grab input of textarea & store it for use when user clicks send
let inputVal;
const inputArr = [];

function getInputValue() {
  inputVal = $("#userInput").val();
  inputArr.push(inputVal);
  console.log("gIV done");
  pushUserBubble();
}

// function to plug input of textarea into a chat bubble and clear input field

function pushUserBubble() {
  let bubble = $("<p>").html($("#userInput").val());
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

// while we log/categorize response, have bot thinking maybe ???

// set timeout function to add a realistic feature of someone thinking, not too long!

// a random insult is pulled from database from yes/no/other category is pushed to the bot chat bubble

// function to pull apropriate category insult from database
// function should randomize it and then remove it from future insults

// function to put response into a chat bubble and push it to the bottom of the chat

// that insult should be taken out of future responses to not be repeated

// feature to add insults to database
