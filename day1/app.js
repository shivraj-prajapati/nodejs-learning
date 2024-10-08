// Importing the HTTP module to create a server
const http = require('http');

// Creating a server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
     // Writing a response to the client
    res.write('Hello World!');
    res.end();
    });

// Good Pratcice to define the port number as a constant
const PORT = 3000;
    
// Listening to the server on port 3000
server.listen(PORT, () => {
    console.log('Server is running on port http://127.0.0.1:3000/');
    });