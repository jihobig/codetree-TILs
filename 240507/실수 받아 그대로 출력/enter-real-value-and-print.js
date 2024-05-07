const fs = require('fs');

let input = fs.readFileSync(0).tostring();

input = Number(input);

console.log(input.toFixed(2));