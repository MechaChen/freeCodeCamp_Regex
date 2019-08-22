let soccerWord = "goooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
console.log(soccerWord.match(goRegex)); // gooooooo
console.log(gPhrase.match(goRegex)); // g
console.log(oPhrase.match(goRegex)); // null
