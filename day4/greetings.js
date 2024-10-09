/**
 * @typedef {Object} Greet
 * @property {function} sayhello - Function to log a greeting message to the console.
 * @property {string} name - The name associated with the greeting.
 * @property {string} time - The current local time when the object was created.
 */

const greet = {
    sayhello : function(){
        console.log('Hello Coders..!');
    },
    name : 'Node.js',
    time : new Date().toLocaleTimeString()
};

module.exports = greet; // Export the 'greet' object to make it accessible to other modules.

