let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
console.log(firstRegex.test(firstString)); // true

let notFirst = "You can't find Ricky now.";
console.log(firstRegex.test(notFirst)); // false
