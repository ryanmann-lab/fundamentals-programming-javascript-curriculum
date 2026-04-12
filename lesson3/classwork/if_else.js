const prompt = require("prompt-sync")();

let age = Number(prompt("How old are you? "));

if (age >= 18) {
    console.log("You are eligible to vote.");
}

// If/else: choose one of two paths

let day = Number(prompt("What day of the week is it?"));

if (day === "monday") {
    console.log("It's the start of the week!");
} else if (day === "friday") {
    console.log("It's almost the weekend!");
} else if (day === "saturday" || day === "sunday") {
    console.log("It's the weekend!");
} else {
    console.log("It's a regular weekday.");
}


