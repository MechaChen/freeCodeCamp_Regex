let quoteSample = "The five boxing wizard jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex);
console.log(result);
