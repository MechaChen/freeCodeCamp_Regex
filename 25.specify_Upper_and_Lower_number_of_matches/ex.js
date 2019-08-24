let ohStr = "Ohhhhhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
console.log(result);
