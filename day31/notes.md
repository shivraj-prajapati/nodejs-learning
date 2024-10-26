# Express.js - API Development with Custom HTML and JSON Response Headers

- **HTML Response Endpoint**:
  - **Route**: `/`
  - **Description**: Sends an HTML page as the response.
  - **Implementation**:
    - Utilized `res.write()` to incrementally send HTML content to the client.
    - Used `res.end()` to indicate the end of the response after writing HTML tags.

- **JSON API Endpoint with Custom Headers**:
  - **Route**: `/api/data`
  - **Description**: Responds with a JSON object and includes custom headers.
  - **Implementation**:
    - Used `res.setHeader()` to set `Content-Type` as `application/json`, specifying the format of the response.
    - Added an additional header `Custom-Header` with the value `HelloWorld`.
    - Sent a JSON response `{ "message": "Hello from JSON API!" }` using `res.end()` after converting it to a string with `JSON.stringify()`.

- **Key Methods and Concepts**:
  - `app.get()`: Defines route handlers for HTTP GET requests.
  - `res.setHeader()`: Sets custom headers to configure response metadata.
  - `res.write()`: Sends chunks of data in the response stream (useful for HTML and streaming).
  - `res.end()`: Ends the response, signaling to the client that all data has been sent.
  - `app.listen()`: Starts the server on the specified port and waits for incoming connections.
