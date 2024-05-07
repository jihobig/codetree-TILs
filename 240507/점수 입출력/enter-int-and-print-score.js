const fs = require('fs');

let n = Number(fs.readFileSync(0).toString());

console.log(`your score is ${n} point.`)