// 1. console.group() and console.groupEnd()
// Creates a new group in the console output. The group is expanded by default.
console.group("My Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd()

// 2. console.groupCollapsed() and console.groupEnd()
// Creates a new group in the console output. The group is collapsed by default and can be expanded manually.
console.groupCollapsed("Hello");
console.log("Message inside collapsed Group");
console.groupEnd();
