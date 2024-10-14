# Node.js HTTP Module Functions

- **`http.createServer([requestListener])`**: Creates an HTTP server that handles incoming requests. The `requestListener` function receives `request` and `response` objects.

- **`http.request(options[, callback])`**: Creates an outgoing HTTP request. The `options` parameter includes properties like `hostname`, `port`, `path`, `method`, and `headers`.

- **`http.get(options[, callback])`**: A simplified method to make a GET request. It automatically sets the method to `GET`.

- **`http.Server (Class)`**: Represents an HTTP server, allowing you to listen for requests using methods like `server.listen()` and `server.close()`.

- **`http.ServerResponse (Class)`**: Represents the response object sent to the client. It includes methods for setting response headers and status codes.

- **`http.IncomingMessage (Class)`**: Represents incoming requests, providing information about the request method, URL, and headers.

- **`http.Agent (Class)`**: Manages request connection pooling to optimize performance for HTTP requests.

- **`http.ClientRequest (Class)`**: Represents an outgoing request, allowing you to send data and manage request lifecycle events.
