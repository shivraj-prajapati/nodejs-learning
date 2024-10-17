# **Day XX: Express.js** : Handling PATCH Requests

### 1. Endpoint Definition
**Function**: A PATCH request is defined at the `/users/:id` endpoint to update user information partially. This allows updating specific fields of a user identified by an ID parameter.

### 2. Route Parameters
**Function**: The route uses an ID parameter to specify which user to update. This parameter is extracted from the request URL.

### 3. Request Body
**Function**: The request body contains the new data that will be used to update the user object. This data should be in JSON format.

### 4. User Lookup
**Function**: The code searches an array of users to find the user object with the matching ID. If no user is found, a 404 error response is generated.

### 5. Data Update
**Function**: The properties of the user object are updated with the new data provided in the request. This allows for partial updates without affecting other fields.

### 6. Response
**Function**: After a successful update, a JSON response is sent back to the client, indicating that the user was updated successfully along with the updated user information.

### 7. Server Initialization
**Function**: The Express server is started on a specified port, allowing it to listen for incoming requests.

### Example of Sending Data via PATCH
To test the PATCH endpoint, you can use tools like Postman or cURL. The request can be structured with the following details:
- **URL**: `http://localhost:3000/users/1`
- **Method**: PATCH
- **Body**: Raw JSON data, e.g., `{"name": "New Name"}`
