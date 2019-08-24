let userCheck = /^[a-z]{2,}\d*/i;
console.log("JACK : ", userCheck.test("JACK")); // true
console.log("J : ", userCheck.test("J")); // fasle
console.log("Oceans11 : ", userCheck.test("Oceans11")); // true
console.log("11Oceans11 : ", userCheck.test("11Oceans11")); // false
console.log("RegexGuru : ", userCheck.test("RegexGuru")); // true
console.log("007 : ", userCheck.test("007")); // false
console.log("9 : ", userCheck.test("9")); // false
