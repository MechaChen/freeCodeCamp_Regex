let whiteSpace = "Whitespace. Whitespace everywhere!";
let nonSpaceRegex = /\S/g;
let result = whiteSpace.match(nonSpaceRegex).length;
console.log(result);
