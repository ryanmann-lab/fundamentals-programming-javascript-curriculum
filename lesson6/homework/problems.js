// Problem 1
// Count and print how many times "Alex" appears in the list.
let list = ["Alex", "Bob", "Charlie", "Alex", "David"]
let counter = 0;
for (let i = 0; i < list.length; i++) {
    let item = list[i];
    if (item == "Alex") {
            counter = counter + 1;
    }
}
console.log(counter, "Alexes")


// Problem 2
// Search for "elephant" in the list and print if it's found.

let animals = ["Elephant", "Cat", "Elephant", "Giraffe", "Eagle"]
let elephantCounter = 0;
for (let i = 0; i < animals.length; i++) {
    let item = animals[i];
    if (item == "Elephant") {
            elephantCounter = elephantCounter + 1;
    }
}
console.log(elephantCounter, "Elephants");


// Problem 3
// Count and print how many scores are 100.
let scores = [100, 45, 100, 100, 18]
let scoreCounter = 0;
for (let i = 0; i < scores.length; i++) {
    let item = scores[i];
    if (item == 100) {
            scoreCounter = scoreCounter + 1;
    }
}
console.log(scoreCounter, "100s");


// Problem 4
// Search for the color "blue" in the list and print its index if it's found.

let colors = ["Blue", "Orange", "Red", "Blue", "Green", "Blue"];
let colorCounter = 0;
for (let i = 0; i < colors.length; i++) {
    let item = colors[i];
    if (item == "Blue") {
        colorCounter = colorCounter + 1;
    }
    
}
console.log(colorCounter, "Blues");


// Problem 5
// Count and print how many temperatures in the list are below zero.
let temperatures = [-5, 0, 10, -3, 15, -1]
let tempCounter = 0; 
for (let i = 0; i < temperatures.length; i++) {

    let item = temperatures[i];
    if (item < 0) {
        tempCounter = tempCounter + 1;
    }
    
}
console.log(tempCounter, "temperatures below zero");