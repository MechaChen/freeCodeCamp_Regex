let theEnding = "This is a never ending story";
let storyRegex = /story$/;
console.log(storyRegex.test(theEnding));

let noEnding = "Sometimes a story will have to end.";
console.log(storyRegex.test(noEnding));
