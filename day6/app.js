
// 1. console.table()
// Prints an array or object as a table.
const users = [
    { name: "Rocky", age: 25 },
    { name: "Vashu", age: 30 },
    { name: "Shiva", age: 35 },
]
console.table(users);

// 2. console.time()
// Starts a timer with a specified label.
//! Make sure to use the same label to stop the timer. time("Value") == timeEnd("Value")
console.time("Timer");
for (let i = 0; i < 1000000; i++) {} // Example loop
console.timeEnd("Timer");

// 3. console.timeLog()
// Logs the current time of a timer without stopping it.

console.time("MyTimer");
console.timeLog("MyTimer"); // Show the time taken till now
console.timeEnd("MyTimer"); 

// 4. console.assert()
// Prints an error message if the assertion is false.
const x = 8;
console.assert(x > 10, "x is not greater than 10");

// 5. console.trace()
// Prints a stack trace to where the code is executed.
function a() {
    b();
}
function b() {
    console.trace("Hey i am a trace message");
}
// a();

// 6. console.clear()
// Clears the console (may not work in all environments).

// console.clear();
