# Day 33: Understanding Response Chainable Methods in Express.js

- In Day33, we explored the **response chainable methods** in Express.js, useful for setting headers, managing content types, and sending responses in various formats.
- Created two routes (`/data` and `/download`) to demonstrate these methods with examples.

### Key Methods and Their Usage:
  
  - **`res.type(type)`**: Sets the `Content-Type` of the response, letting the client know the format of the data.
    - **Example**: `res.type('json')` sets `Content-Type` to `application/json`, often used to specify JSON, text, or HTML formats.
  
  - **`res.format(object)`**: Sends different responses based on the client’s `Accept` header, allowing flexible content delivery.
    - **Example**: On the `/data` route, sends plain text, HTML, or JSON based on the `Accept` type requested by the client.
  
  - **`res.attachment([filename])`**: Sets `Content-Disposition` to attachment, signaling the client to download the response content as a file.
    - **Example**: In `/download`, `res.attachment('sample.pdf')` suggests a file download named `sample.pdf`, making the response downloadable.

### Code Implementations:
  
  - Set up `/data` route to demonstrate `res.format()` by providing different response formats based on the client’s `Accept` header.
    - **Example**: Sends plain text, HTML, or JSON depending on the accepted content type, illustrating flexible response handling.
  
  - Set up `/download` route to demonstrate `res.attachment()` to send content as a downloadable file with a specific filename.
    - **Example**: Suggests downloading a PDF file when visiting `/download`, helping deliver files via Express.

### Summary of Methods and Concepts:

  - **`res.type()`**: Sets response `Content-Type` to specify the format of the data.
  - **`res.format()`**: Sends different responses based on `Accept` headers for multiple content types.
  - **`res.attachment()`**: Prepares response content for file download with a specified filename.
  
