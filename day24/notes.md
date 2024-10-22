# Day 24 : Express.js Server and Middleware Functions

- **`express()`**: Initializes an Express application, allowing you to set up middleware, routes, and more.

- **`app.use(middleware)`**: Registers middleware functions that execute during the request-response cycle, allowing you to modify requests or responses.

- **`express.json()`**: Middleware that parses incoming JSON requests and makes the resulting data available in `req.body`.

- **Logging Middleware**: A custom middleware that logs the request method and URL to the console for debugging purposes.

- **Authentication Middleware**: A middleware that checks if a user is authenticated. If authenticated, it calls `next()`, otherwise sends a `401 Unauthorized` response.

- **`app.get(path, callback)`**: Defines a route handler for GET requests to the specified path, allowing you to send responses back to the client.

- **`app.listen(port, callback)`**: Starts the server on the specified port and executes a callback function once the server is running.

- **Request and Response Objects**: Represents incoming requests and outgoing responses in route handlers and middleware, providing methods and properties to interact with HTTP requests.

- **Middleware Chaining**: The ability to stack multiple middleware functions that can execute in sequence during the request-response cycle.

- **Status Codes**: Sending appropriate HTTP status codes in responses to inform clients about the result of their requests (e.g., `401 Unauthorized` for authentication failures).
