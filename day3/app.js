// __dirname: This global variable returns the directory name of the current module. 
// It is useful when you need to work with file paths, especially when loading external files.
console.log("__dirname: ", __dirname);

// __filename: This global variable returns the filename of the current module, including the full path.
// It helps to get the current file location in your project.
console.log("__filename: ", __filename);

// exports: This is an object that defines what a module exports and makes available to other modules.
// Here, we are attaching 'global.myVariable' to the global object, which will be available throughout the application.
global.myVariable = "Hello World";
console.log("global.myVariable: ", global.myVariable);

// process.env: This object stores the user environment information. It is used to access environment variables.
console.log("process.env: ", process.env); // This will output all environment variables of the system.

// process.argv: This is an array that contains command-line arguments passed when the Node.js process was launched.
// First argument is the 'node' executable, the second is the path of the script, and subsequent arguments are passed by the user.
console.log("process.argv: ", process.argv); // Useful for reading input arguments from the command line.

// module: Represents the current module and allows you to inspect the module object. 
// It contains the module's ID, filename, paths, exports, etc.
// console.log("module: ", module);

// console.error: Used to output error messages to the console.
console.error("This is an error message"); // Displays an error message in red text.

// setTimeout: This global method executes a function after a specified number of milliseconds.
const timeoutId = setTimeout(() => {
    console.log("This is executed after 2 seconds.");
}, 2000);

// setInterval: This global method repeatedly executes a function after a fixed delay (in milliseconds).
const intervalId = setInterval(() => {
    console.log("This message repeats every 1 second.");
}, 1000);
