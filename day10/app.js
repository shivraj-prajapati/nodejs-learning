// 1. setTimeout() 
// Use: Executes the callback after a specified delay (in milliseconds).
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

// 2. clearTimeout()
// Use: Cancels the timeout set by setTimeout().
const timeout = setTimeout(() => {
    console.log("This will not be executed");
});
clearTimeout(timeout); // If you call clearTimeout() before the callback is executed, the callback will not be executed.

// 3. setInterval()
// Use: Executes the callback repeatedly at a specified interval (in milliseconds).
const interval = setInterval(() => {
    console.log("This will be run every 1 second");
}, 1000);

// 4. clearInterval()
// Use: Cancels the interval set by setInterval().
setTimeout(() => {
    clearInterval(interval);
}, 5000);

// 5. setImmediate()
// Use: Executes the callback immediately after the current event loop phase.
setImmediate(() => {
    console.log("Executed immediately");
});

// 6. process.nextTick()
/*
 * process.nextTick() is a special function in Node.js that schedules a callback to be executed
 * in the next phase of the event loop, before asynchronous I/O operations but after immediate tasks.
 * 
 * It is useful when you need to prioritize certain tasks to run before any I/O operations or 
 * other asynchronous callbacks, without waiting for the event loop's next iteration.
 * 
 * This function behaves like a microtask, ensuring high-priority code runs immediately 
 * after the current operation completes, giving you more granular control over the execution order.
 */
process.nextTick(() => {
    console.log('This runs before any immediate tasks');
});

// 7. queueMicrotask()
// Use: Schedules a microtask to execute at the end of the current execution phase.
queueMicrotask(() => {
    console.log("This runs at the end of the current execution phase");
})


