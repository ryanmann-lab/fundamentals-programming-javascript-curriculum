const animals = ["video1", "video2", "video3", "video4", "video2"];
console.log(animals);

let counter = 0;
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "video2") {
        counter = counter + 1;
    }
}

console.log(counter, "video2");






let numbers = [14, 1, 50, 4, 20, 12];
counter = 0;
for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item > 10) {
        counter = counter + 1;
    }
}
console.log(counter, "numbers above 10");








let fruit = ["banana", "peach", "apple"];

// Find if apple in array
if (fruit.includes("apple")) {
    console.log("Found apple");
} else {
    console.log("No apples found");
}

// Find if apple is an array and print its index

let found = false;
let index = -1;

for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "apple") {
        found = true;
        index = i;
        found = true; //mark as found
        index = 2; // store index
        break; // exit the loop after finding
    }
}