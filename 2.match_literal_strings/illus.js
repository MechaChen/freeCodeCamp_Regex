let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr));

let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr));
