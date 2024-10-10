// 1. console.count()
// Logs the number of times the count label has been called.
console.count("Hello");
console.count("Hello");
console.count("Hello");

// 2. console.countReset()
// Resets the count for the specified label.
console.count("Hey");
console.countReset("Hey"); // Reset the count
console.count("Hey");

// 3. console.dir()
// Displays an object in a readable way with customizable options.
const obj = {name : "Rocky", age : 21, city : "Delhi"};
console.dir(obj, {colors : true, depth : null});