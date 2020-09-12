let inputVal;
let holdback = false;
let croolPath;
const insultsArr = [];

//load document and bot asks how mean in a 1 second delayed chat bubble
$(() => {
  setTimeout(() => {
    let bubble = $("<p>")
      .addClass("bot-bubble")
      .append("I can be pretty cruel. You want me to go easy on you?");
    $("#newBub").append(bubble);
    croolPath = "determine";
  }, 1000);
});

function clickRes() {
  if (croolPath == "determine") {
    // determining if you want hard insults or not
    determineIO();
  } else if (croolPath == "insult") {
    // being insulted
    if (holdback == false) {
      // if they want all the insults
      anyInsult();
    } else {
      // if they want only the softer insults
      softInsult();
    }
  } else if (croolPath == "receive") {
    // giving the computer an insult
  }
}

// The insults must be retrieved from the database

//get user input
function getInputValue() {
  inputVal = $("#userInput").val();
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
    pushCroolBubble(
      "Oh, are your feelings too delicate to hear the truth? Not all of us are strong, it's okay."
    );
  } else if (isNegative(userResponse)) {
    console.log("answer is no");
    holdback = false;
    pushCroolBubble("Don't blame me if you close this in tears.");
  } else {
    console.log("answer is something else");
    pushCroolBubble(
      "Can't even answer a simple binary question? Things aren't looking good for you."
    );
  }
  croolPath = "insult";
  console.log(croolPath);
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
c;

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
function anyInsult() {
  $.get("/api/all", (data) => {
    console.log(data);
    insultsArr.push(data);
  });
}

function softInsult() {
  $.get("/api/soft", (data) => {
    console.log(data);
    insultsArr.push(data);
  });
}
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
  croolPath = "receive";
}
