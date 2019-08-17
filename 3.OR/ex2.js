let petString = "James has a pet dog.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(petString, result);

petString = petString.replace("dog", "cat");
console.log(petString, petRegex.test(petString));

petString = petString.replace("cat", "bird");
console.log(petString, petRegex.test(petString));

petString = petString.replace("bird", "fish");
console.log(petString, petRegex.test(petString));
