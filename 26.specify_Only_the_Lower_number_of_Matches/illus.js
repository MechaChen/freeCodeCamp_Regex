let A4 = "haaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
console.log(multipleA.test(A4)); // true
console.log(multipleA.test(A2)); // false
console.log(multipleA.test(A100)); // true
