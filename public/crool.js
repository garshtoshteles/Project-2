let inputVal;
let croolPath;
let newContents;
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
    getInputValue();
    setTimeout(() => {
      randomInsult();
    }, 1000);
  } else if (croolPath == "receiveIns") {
    // giving the computer an insult
    sendInsult();
  } else if (croolPath == "receiveInt") {
    sendIntensity();
  }
}

// The insults must be retrieved from the database
function randomInsult() {
  pushCroolBubble(
    insultsArr[Math.floor(Math.random() * insultsArr.length)].contents
  );
}

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
  if (isAffirmative(userResponse)) {
    pushCroolBubble(
      "Oh, are your feelings too delicate to hear the truth? Not all of us are strong, it's okay."
    );
    softInsult();
  } else if (isNegative(userResponse)) {
    pushCroolBubble("Don't blame me if you close this in tears.");
    anyInsult();
  } else {
    pushCroolBubble(
      "Can't even answer a simple binary question? Things aren't looking good for you."
    );
    return;
  }
  croolPath = "insult";
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
function anyInsult() {
  $.get("/api/all", (data) => {
    insultsArr.push(...data);
    setTimeout(randomInsult(), 1000);
  });
}

function softInsult() {
  $.get("/api/soft", (data) => {
    insultsArr.push(...data);
    setTimeout(randomInsult(), 1000);
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
  croolPath = "receiveIns";
}

function sendInsult() {
  getInputValue();
  // insult is stored in inputVal
  newContents = inputVal;
  pushCroolBubble("Is this insult a 1 (softer) or a 2 (meaner)?");
  croolPath = "receiveInt";
}

function sendIntensity() {
  getInputValue();
  let newInsult = {
    contents: newContents,
    intensity: parseInt(inputVal),
  };
  $.post("/api/new", newInsult).then(() => {
    pushCroolBubble(
      "Nice one. Let's get back to the important stuff - hurting your feelings."
    );
    setTimeout(randomInsult(), 1000);
    croolPath = "insult";
  });
}
