// Problem 1
// Create a list of 3 operating systems.
// Print the last one using length.
// Then reverse the list and print it.
let operatingSystems = ["Windows", "macOS", "Linux"];
console.log(operatingSystems[operatingSystems.length - 1]);
operatingSystems.reverse();
console.log(operatingSystems);

// Problem 2
// Create a list of 4 school subjects.
// Print the second subject.
// Then sort them alphabetically and print the result.
let schoolSubjects = ["Math", "Science", "History", "English"];
console.log(schoolSubjects[1]);
schoolSubjects.sort();
console.log(schoolSubjects);
// Create a list of 5 error codes.
// Print how many there are.
// Then find the index of "403" and print it.
let errorCodes = ["404", "500", "403", "401", "502"];
console.log(errorCodes.length);
console.log(errorCodes.indexOf("403"));

// Problem 4
// Create a list of 2 programming languages.
// Print a random one.
// Then append another language and print the list.
let programmingLanguages = ["JavaScript", "Python"];
console.log(programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)]);
programmingLanguages.push("Java");
console.log(programmingLanguages);

// Problem 5
// Create a list of 6 passwords.
// Print the one in the middle using length.
// Then remove the first password in the list and print it.
let passwords = ["pass1", "pass2", "pass3", "pass4", "pass5", "pass6"];
console.log(passwords[Math.floor(passwords.length / 2)]);
passwords.shift();
console.log(passwords);

