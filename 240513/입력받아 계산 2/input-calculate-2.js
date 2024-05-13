const fs = require('fs');

let a = fs.readFileSync(0).toString().split(' ');

console.log(`${a[0] * a[1]}`)