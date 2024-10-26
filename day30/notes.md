# Day 30: Express.js - API Development with Custom Headers
- Set up an Express.js server using the `express` module.
- Created an API endpoint:
  - `/api/data`: Responds with a JSON object containing a message.
- Set custom response headers:
  - `Content-Type`: Specifies the response format as JSON.
  - `Cache-Control`: Prevents caching by setting it to `no-store`.
  - `X-Custom-Header`: A custom header named "hey-buddy".
- The server listens on port 3000.
- Important methods and concepts:
  - `app.get()`: To define route handlers for HTTP GET requests.
  - `res.set()`: To set custom headers in the response.
  - `res.send()`: To send a JSON response to the client, formatted using `JSON.stringify()`.
  - `app.listen()`: To start the server and listen on a specific port.