# Day 17: Important Concepts of Promises in Node.js

1. **Promise**
   - **Function**: Used to handle asynchronous operations. A promise is an object that represents the success or failure of an operation. It has three states:
     - **Pending**: When the promise is not yet completed.
     - **Resolved**: When the promise has successfully completed.
     - **Rejected**: When the promise has failed.
   - **Use Case**: File reading, API calls, or database queries.

2. **.then() and .catch()**
   - **Function**:
     - **.then()**: Executes a callback function when the promise is resolved.
     - **.catch()**: Handles the error when the promise is rejected.
   - **Use Case**: Success or error handling.

3. **Promise.all()**
   - **Function**: Executes multiple promises in parallel and waits until all of them are complete. If any promise results in an error, it triggers the catch block.
   - **Use Case**: When you need to make multiple API calls and process their results together.

4. **Promise.race()**
   - **Function**: Returns the result of the first promise that completes, whether it is resolved or rejected.
   - **Use Case**: When you need the fastest response, such as getting a quick response from a service.

5. **async/await**
   - **Function**: A technique to handle promises in a simpler way. By using await inside an async function, you can easily retrieve the result of a promise.
   - **Use Case**: Writing code in a synchronous manner, improving readability, and making error handling easier.

6. **Multiple await statements**
   - **Function**: You can await multiple promises sequentially. Each promise's result will be available separately for easy handling.
   - **Use Case**: Sequential API calls where the result of one call is needed for the next call.
