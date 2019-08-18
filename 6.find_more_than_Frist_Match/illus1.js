let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex));

let repeatRegex = /Repeat/g;
console.log(testStr.match(repeatRegex));
