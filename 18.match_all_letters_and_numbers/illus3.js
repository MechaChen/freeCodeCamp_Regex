let longHand = /[a-zA-Z0-9_]/;
let shortHand = /\w/;
let numbers = "42";
let varNames = "importand_var";
console.log(longHand.test(numbers));
console.log(longHand.test(varNames));
console.log(shortHand.test(numbers));
console.log(shortHand.test(varNames));
