
let prompt = require("prompt-sync")();

// code below (replace this example)
let num = Math.ceil(Math.random() * 50);
let answeredNum = [];
let answer = "";


while (answer !== num) {
  answer = prompt("Guess a number: ");
  if (isNaN(answer)) {
    console.log("Not a number! Try again!");
    continue;
  } else {
    answer = parseInt(answer, 10);
  }

  if (answeredNum.indexOf(answer) !== -1) {
    console.log("Already guessed!");
  } else if (answer < num) {
    console.log("Too Low!");
    answeredNum.push(answer);
  } else if (answer > num) {
    console.log("Too High!");
    answeredNum.push(answer);
  }
}

console.log("You got it! You took " + answeredNum.length + " attempts!");