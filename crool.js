let inputVal;
let holdback = false;
const inputArr = [];

//load document and bot asks how mean in a 1 second delayed chat bubble
$(() => {
  setTimeout(() => {
    let bubble = $("<p>")
      .addClass("bot-bubble")
      .append("I can be pretty cruel. You want me to go easy on you?");
    $("#newBub").append(bubble);
    $("#theButton").attr("onclick", "determineIO()");
  }, 1000);
});

//user replies with preference I DONT KNOW HOW TO FINISH THIS CODE
function howMean() {
  inputVal = $("#userInput").val();

  //if input value equals "rude" then pull from 1 ratings
  //else pull from 2 ratings
}
// The insults must be retrieved from the database

//get user input
function getInputValue() {
  inputVal = $("#userInput").val();
  inputArr.push(inputVal);
  pushUserBubble();
}

//push user input into chat bubble
function pushUserBubble() {
  let bubble = $("<p>")
    .addClass("user-bubble")
    .html($("#userInput").val());
  $("#newBub").append(bubble);
  $("#userInput").val("");
}

// reply is determined to be yes/no/other
function determineIO() {
  getInputValue();
  let userResponse = inputVal.toLowerCase();
  console.log("determineIO running.");
  console.log(userResponse);
  if (isAffirmative(userResponse)) {
    console.log("answer is yes");
    holdback = true;
  } else if (isNegative(userResponse)) {
    console.log("answer is no");
    holdback = false;
  } else {
    console.log("answer is something else");
    pushCroolBubble(
      "Can't even answer a simple binary question? Things aren't looking good for you."
    );
  }
}

//possible user inputs for yes
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

//possible user inputs for no
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

//determin yes response
function isAffirmative(text) {
  for (let i = 0; i < yesArr.length; i++) {
    if (text == yesArr[i]) {
      return true;
    }
  }
  return false;
}

//determin no response
function isNegative(text) {
  for (let i = 0; i < noArr.length; i++) {
    if (text == noArr[i]) {
      return true;
    }
  }
  return false;
}

// function to pull apropriate category insult from database
// function should randomize it and then remove it from future insults
// send the insult using a setTimeout on pushCroolBubble

// function that accepts text and pushes it to a bot-bubble
function pushCroolBubble(text) {
  let croolBubble = $("<p>").html(text);
  croolBubble.addClass("bot-bubble");
  $("#newBub").append(croolBubble);
}

// feature to add insults to database

function receiveInsult() {
  pushCroolBubble("Okay, let's hear the best you've got.");
  // UNFINISHED
}
