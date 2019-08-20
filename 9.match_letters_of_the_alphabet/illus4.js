let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let atStr = /[a-z]at/;
console.log(catStr.match(atStr));
console.log(batStr.match(atStr));
console.log(matStr.match(atStr));
