# **Day 22: Express.js** : Handling PUT Requests

### 1. Endpoint Definition
**Function**: Defines a PUT request at the `/users/:id` endpoint to update a user’s information.

### 2. Request Handling
**Function**: Listens for incoming data in chunks and accumulates it into a single string.

### 3. JSON Parsing
**Function**: Parses the accumulated string into a JSON object after all data is received.

### 4. User Lookup
**Function**: Searches for the user in the array using the provided ID. 

### 5. Data Update
**Function**: Updates the user's properties with the new data while preserving existing values if not provided.

### 6. Server Initialization
**Function**: Starts the Express server on a specified port to handle incoming requests.

*Function**: The Express server is started on a specified port, allowing it to listen for incoming requests.

### Example of Sending Data via PUT
To test the PUT endpoint, you can use tools like Postman or cURL. The request can be structured with the following details:
- **URL**: `http://localhost:3000/users/1`
- **Method**: PUT
- **Body**: Raw JSON data, e.g., `{"name": "Updated Name", "email": "updated@example.com"}`

### Example Response
When a PUT request is made successfully, the response would include a success message along with the updated user object, confirming the changes made.

