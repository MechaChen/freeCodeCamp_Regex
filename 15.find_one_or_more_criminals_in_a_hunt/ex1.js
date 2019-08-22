let crowd = "P1P2P3P4P5CCCP6P7P8P9";
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals); // CCC
