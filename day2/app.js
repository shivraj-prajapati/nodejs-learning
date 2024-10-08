// Importing a custom module
// ! When importing our file we need to add ./ before the file name

const calculator = require('./calculator');

console.log(`Addition: 5 + 3 = ${calculator.add(5, 3)}`);
console.log(`Subtraction: 10 - 3 = ${calculator.sub(10, 3)}`);
console.log(`Multiplication: 5 * 9 = ${calculator.mul(5, 9)}`);
console.log(`Division: 75 / 5 = ${calculator.div(75, 5)}`);

