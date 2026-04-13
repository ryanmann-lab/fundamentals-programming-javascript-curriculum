//Movie Check
const prompt = require("prompt-sync")();

let age = Number(prompt("How old are you? "));
let hasTicket = prompt("Do you have a ticket? (yes/no) ");
if (age >= 13 && hasTicket === "yes") {
    console.log("You can enter the PG-13 movie.");
} else {
    console.log("You cannot enter the PG-13 movie.");
}
console.log("Movie entry check complete.");



//Bus Check

let hasPass = prompt("Do you have a pass? (yes/no) ");
let hasMoney = prompt("Do you have money to pay? (yes/no) ");
if (hasPass === "yes" || hasMoney === "yes") {
    console.log("You can ride the bus.");
} else {
    console.log("You cannot ride the bus.");
}
console.log("Bus check complete.");

//Homework Check

let didHomework = prompt("Did you do your homework? (yes/no) ");

// NOT: flips true to false and false to true
if (!(didHomework === "yes")) {
    console.log("Go finish your homework!");
} else {
    console.log("Nice job!You're all done.");
}
console.log("Homework check complete.");

// You can combine multiple logical operators.
let finished_homework = true;
let is_weekend = false;
let parent_said_yes = true;

// ! first, && second, || is last.
if (finished_homework && (is_weekend || parent_said_yes)) {
    console.log("You can play games.");
}

