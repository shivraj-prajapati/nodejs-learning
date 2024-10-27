# Day 32: Understanding `req` Properties in Express.js

- In Day32, we explored the **`req` object properties** in Express.js, used to access and manage incoming request data effectively.
- Created a dynamic route `/user/:id` to demonstrate how each property can be used with **dummy data**.

### Key Properties and Their Usage:
  
  - **`req.params`**: Accesses URL parameters, helpful for routes requiring dynamic values.
    - **Example**: Retrieves `userId` from `/user/:id` to fetch specific user details.
  
  - **`req.query`**: Extracts query string parameters, often used for search or filtering.
    - **Example**: Retrieves `search` from query string (e.g., `/user/101?search=developer`).
  
  - **`req.body`**: Used in **POST/PUT** requests to receive request body data (like form or JSON data).
    - **Example**: Typically accesses request data, such as `{ name: "New User" }` in a POST request.
  
  - **`req.headers`**: Retrieves metadata from headers, like **user-agent** or **authentication tokens**.
    - **Example**: Accesses `user-agent` to identify client device/browser information.
  
  - **`req.method`**: Shows the HTTP request method used, like **GET**, **POST**, **PUT**, etc.
    - **Example**: Returns `GET` for a typical data-fetching request.
  
  - **`req.url`**: Displays the full requested URL, including path and query string.
    - **Example**: Shows complete URL `/user/101?search=developer`.
  
  - **`req.path`**: Provides only the path part of the URL (excluding query parameters).
    - **Example**: Shows `/user/101` without any query parameters.
  
  - **`req.cookies`**: Accesses cookies sent from the client, often used for sessions or user-specific settings.
    - **Example**: Retrieves the `user` cookie if available, else defaults to "No user cookie".
  
  - **`req.ip`**: Fetches the client’s IP address, useful for tracking and security.
    - **Example**: Shows the client IP for logging or analysis.

### Additional Implementations:
  - Set up **middleware** for parsing JSON (`req.body`) and cookies (`req.cookies`).
  - Configured the server to handle GET requests at `/user/:id` using dummy user data.

### Summary of Methods and Concepts:
  - **`app.use()`**: Middleware for handling JSON and cookies.
  - **`app.get()`**: Sets up route `/user/:id` for GET requests.
  - **`res.json()`**: Sends back a JSON response displaying `req` property values.
  - **`app.listen()`**: Starts the server on **port 3000** to handle incoming requests.
