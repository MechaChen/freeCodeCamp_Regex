const testStr = "Repeat, Repeat, Repeat";
const ourRegex = /Repeat/;
console.log(testStr.match(ourRegex));

const repeatRegex = /Repeat/g;
console.log(testStr.match(repeatRegex));
