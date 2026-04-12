// Problem 1
// Ask the user to enter a number.
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a number: "));
// Print "Even" if the number is divisible by 2, otherwise print "Odd".
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// Problem 2
// Ask the user for the day of the week (all lowercase).
// Print "Weekend" if the day is "saturday" or "sunday",
// else print "Weekday".
let day = prompt("Enter the day of the week (all lowercase): ");
if (day === "saturday" || day === "sunday") {
    console.log("Weekend");
} else {
    console.log("Weekday");
}


// Problem 3
// Generate a random number between 1 and 10 (inclusive).
// Ask the user to guess the number.
// Print "Correct!" if the guess matches the random number, else print "Try again!".
let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess the number between 1 and 10: "));
if (guess === randomNumber) {
    console.log("Correct!");
} else {
    console.log("Try again!");
}


// Problem 4
// Ask the user for a positive integer.
// If the number is divisible by 2 and greater than 10, print "Big even number".
// Otherwise print "Number does not meet criteria".
let positiveInteger = parseInt(prompt("Enter a positive integer: "));
if (positiveInteger > 10 && positiveInteger % 2 === 0) {
    console.log("Big even number");
} else {
    console.log("Number does not meet criteria");
}


// Problem 5
// Ask the user for two numbers.
// Print which number is larger.
// If the numbers are equal, print "Numbers are equal".
let num1 = parseFloat(prompt("enter the first number:"));
let num2 = parseFloat(prompt("enter the second number:"));

if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num1 < num2) {
    console.log("The larger number is: " + num2);
} else{
    console.log ("Numbers are equal");
}