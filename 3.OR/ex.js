let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
console.log(result);

petString.replace("cat", "dog");
console.log(petRegex.test(petString));

petString.replace("dog", "bird");
console.log(petRegex.test(petString));

petString.replace("bird", "fish");
console.log(petRegex.test(petString));
