let text = "<h1>Winter is coming</h1>";
let longRegex = /<.*>/;
let shortRegex = /<.*?>/;
let longResult = text.match(longRegex);
let shortResult = text.match(shortRegex);
console.log(longResult); // <h1>Winter is coming</h1>
console.log(shortResult); // <h1>
