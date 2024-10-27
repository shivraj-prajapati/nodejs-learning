// Set up Express.js application
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.json()); // Middleware to parse JSON body in requests
app.use(cookieParser()); // Middleware to parse cookies

// Dummy data for demonstration
const dummyUserData = {
  '101': { name: 'John Doe', age: 28, role: 'Developer' },
  '102': { name: 'Jane Smith', age: 32, role: 'Designer' }
};

app.get('/user/:id', (req, res) => {
  // `req.params`: Access URL parameters, commonly used to identify resources by a unique identifier
  const userId = req.params.id;
  const user = dummyUserData[userId] || { message: 'User not found' };

  // `req.query`: Access query string parameters in the URL, often used for search or filtering
  const searchQuery = req.query.search || 'about-us';

  // `req.body`: Access request body, typically used in POST and PUT requests to handle incoming data
  // Here, it's not used as this is a GET request; in a POST, we could extract data like `{ name: "New User" }`
  
  // `req.headers`: Access request headers, used to retrieve metadata, tokens, or user-agent details
  const userAgent = req.headers['user-agent'];

  // `req.method`: Access the HTTP request method, useful for conditional handling based on method type (GET, POST, etc.)
  const methodUsed = req.method;

  // `req.url`: Access the full requested URL, including path and query parameters
  const fullUrl = req.url;

  // `req.path`: Access only the path part of the URL, excluding query parameters
  const pathOnly = req.path;

  // `req.cookies`: Access cookies sent by the client, often used for session handling or user-specific settings
  const userCookie = req.cookies.user || 'No user cookie';

  // `req.ip`: Retrieve the client’s IP address, helpful for logging, security, and tracking purposes
  const clientIp = req.ip;

  // Send all data as JSON response
  res.json({
    userId,           // ID retrieved from req.params
    user,             // Dummy user data or 'User not found'
    searchQuery,      // Search term from req.query
    userAgent,        // Client's user agent from req.headers
    methodUsed,       // HTTP method used in the request
    fullUrl,          // Full URL of the request
    pathOnly,         // Only the path portion of the URL
    userCookie,       // User's cookie (if available)
    clientIp          // Client's IP address
  });
});

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
