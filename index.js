var readlineSync = require("readline-sync");

var score = 0;
var highScores = [
  {
    name: "poonam",
    score: 3,
  }

]
var questions = [{
  question: "Where do I live? ",
  answer: "mumbai"
}, {
  question: "My favorite superhero would be? ",
  answer: "ironman"
},
{
  question: "How old i'am? ",
  answer: "22"
}];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " ,DO YOU KNOW RAVI?");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right!");
    score = score + 1;
  } else {
    console.log("wrong!");
  }
  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
welcome();
game();
showScores();