let longHand = /[a-zA-Z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
console.log(longHand.test(numbers)); // true
console.log(shortHand.test(numbers)); // true
console.log(longHand.test(varNames)); // true
console.log(shortHand.test(varNames)); // true
