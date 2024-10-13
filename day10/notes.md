# Day 10: JavaScript Timer and Event Loop Methods

- **setTimeout()**: 
  - Executes a callback function after a specified delay (in milliseconds). Useful for scheduling a one-time execution.

- **clearTimeout()**: 
  - Cancels the timeout set by setTimeout(). Prevents the callback from executing if called before the timeout ends.

- **setInterval()**: 
  - Repeatedly executes a callback function at a specified interval (in milliseconds). Ideal for tasks that need to run continuously.

- **clearInterval()**: 
  - Cancels the interval set by setInterval(). Stops the repeated execution of the callback.

- **setImmediate()**: 
  - Executes a callback function immediately after the current event loop phase. Used to run code at the end of the current operation.

- **process.nextTick()**: 
  - Schedules a callback to be executed in the next phase of the event loop, before any I/O operations. Useful for prioritizing specific tasks.

- **queueMicrotask()**: 
  - Schedules a microtask to run at the end of the current execution phase. It ensures high-priority code is executed immediately after the current operation
