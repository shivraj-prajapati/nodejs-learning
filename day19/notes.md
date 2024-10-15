#  ** Day 19 : Express.js** : Simple GET Requests and File Handling

### 1. `app.get('/')`
**Function**: Defines a simple GET request at the root URL (`/`). When accessed, it responds with the text `Hello World`.

### 2. `app.get('/user/:id')`
**Function**: Sets up a route that accepts a dynamic route parameter (`:id`). This allows you to fetch a user by their ID, which can be accessed through `req.params.id`. For example, accessing `/user/123` will return `User ID: 123`.

### 3. `app.get('/search')`
**Function**: Handles GET requests with query parameters. You can access parameters like `name`, `age`, and `gender` using `req.query`. The response includes the values provided in the query string, e.g., `/search?name=John&age=30`.

### 4. `app.get('/users')`
**Function**: Reads data from a JSON file (`data.json`). It uses `fs.readFile()` to asynchronously read the file content. On success, it sends the parsed JSON data as a response. If an error occurs, it responds with a 500 status code and an error message.

### 5. `app.listen(PORT, ...)`
**Function**: Starts the Express server on the specified port (3000 in this case) and logs a message to the console indicating that the server is running.

### Sample Data Structure for `data.json`
```json
{
    "users": [
        { "id": 1, "name": "John", "age": 30 },
        { "id": 2, "name": "Jane", "age": 25 }
    ]
}
