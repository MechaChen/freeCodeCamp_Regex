let quoteSample =
  "Beware of bugs in the code above; I have only proved it correct, not tried it";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
console.log(result);
