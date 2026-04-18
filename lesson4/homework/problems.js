// Problem 1
// Ask user for two test scores.
// If BOTH scores are at least 50, print "You passed both!"

// Otherwise, print "You failed at least one."
const prompt = require("prompt-sync")();

let testScore1 = prompt("What did you score on your test?");
let testScore2 = prompt("What did you score on your other test?");

if (testScore1 >= 50 && testScore2 >= 50) {
    console.log("You passed both!")
} else {
    console.log("You failed at least one test");
}



// Problem 2
// Ask user if they brought lunch and water (yes/no).
// If they brought lunch OR water, print "You're somewhat ready."
// If they brought both, print "You're fully ready!"
// If they brought neither, print "You're not ready."

let broughtLunch = prompt("Did you bring lunch? (yes/no)");
let broughtWater = prompt("Did you bring water? (yes/no)");

if (broughtLunch === "yes" && broughtWater === "yes") {
    console.log("You're fully ready!");
} else if (broughtLunch === "yes" && broughtWater === "no" || broughtLunch === "no" && broughtWater === "yes") {
    console.log("You're somewhat ready.");
} else {
    console.log("You're not ready.");
}


// Problem 3
// Ask user to enter a number.
// If the number is NOT between 1 and 10 (inclusive), print "Out of range."
// Otherwise, print "In range."
let userNum = prompt("Enter a  number:");

if (userNum > 10 || userNum < 1) {
    console.log("Out of range.");
} else {
    console.log("In range.");
}


// Problem 4
// Generate a random number between 1 and 10.
// Ask the user to guess.
// If the guess is right AND the number is even, print "Even match!"
// Else if guess is right OR number is 5, print "Nice try!"
// Otherwise, print "Nope."
 let randomNum = Math.floor(Math.random() * 10) + 1;
 let userGuess = parseInt(prompt("Guess a number between 1 and 10: "));

 if (userGuess === randomNum && randomNum % 2 === 0) {
     console.log("Even match!");
 } else if (userGuess === randomNum || randomNum === 5) {
     console.log("Nice try!");
 } else {
     console.log("Nope.");
 }



// Problem 5
// Ask the user for two numbers.
// If one is divisible by 5 AND the other is NOT divisible by 2, print "Interesting pair!"
// Otherwise, print "Plain pair."

let num1 = prompt("Enter a number: ");
let num2 = prompt("Enter another number: ");

if (num1 % 5 === 0 && num2 %2 !== 0 || num2 % 5 === 0 && num1 % 2 !== 0) {
    console.log("Interesting pair!");
} else {
    console.log("PLain pair.");
}