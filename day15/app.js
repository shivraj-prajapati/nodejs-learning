// Importing the Node.js http module
const HTTP = require('http');
const { hostname } = require('os');

/* 1. http.createServer([requestListener])
   - Creates an HTTP server that handles requests.
   - requestListener: a function that accepts 'request' and 'response' objects.
*/
const server = HTTP.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('Hello, World!'); 
});

// Start the server on port 3000
// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

/* 2. http.request(options[, callback])
   - Creates an outgoing HTTP request.
   - options: Request options (hostname, port, path, method, headers).
   - callback: Function to handle the response.
*/
const options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'GET'
  };
  
  const req = HTTP.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`); 
    res.on('data', (chunk) => {
      console.log(`BODY: ${chunk}`); 
    });
    res.on('end', () => {
      console.log('No more data in response.'); 
    });
  });
  
//   req.end();

/* 3. http.get(options[, callback])
   - Simplified method to make a GET request.
*/

// HTTP.get('http://github.com/', (res) => {
//     console.log(`STATUS: ${res.statusCode}`); // Log the response status code
//     res.on('data', (chunk) => {
//       console.log(`BODY: ${chunk}`); // Log the response body data
//     });
//   });

/* 4. http.Server (Class)
   - Represents an HTTP server.
   - Methods: server.listen(), server.close(), etc.
*/
const httpserver =  HTTP.createServer((req, res) => {
    res.end("Connected to the server");
});

httpserver.listen(3000, () => { 
    console.log('Server running at http://localhost:3000/');
});

// setTimeout(() => {
//     httpserver.close(() => {
//         console.log("Server Closed.!");
//     })
// }, 10000);

/* 5. http.ServerResponse (Class)
   - Represents the response object sent to the client.
*/
const responseServer = HTTP.createServer((req, res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.write('Hello, World!'); 
    res.end(); 
});
responseServer.listen(3001, () => {
    console.log('Server running at http://localhost:3001/');
});

/* 6. http.IncomingMessage (Class)
   - Represents incoming requests.
*/
const incomingServer = HTTP.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);
    res.end();
});

incomingServer.listen(3002, () => {
    console.log('Server running at http://localhost:3002/');
});


/* 7. http.Agent (Class)
   - Manages request connection pooling.
*/
const agent = new HTTP.Agent({ keepAlive: true });

const agentOptions = {
  hostname: 'www.google.com', // Corrected hostname
  port: 80,
  path: '/',
  method: 'GET',
  agent: agent // Use the created agent for the request
};

const agentReq = HTTP.request(agentOptions, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
});

agentReq.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

agentReq.end();


/* 8. http.ClientRequest (Class)
   - Represents an outgoing request.
*/
const clientreqOpt = {
    hostname: 'www.google.com',
    port : 80,
    path : '/',
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    }
};
const clientReq = HTTP.request(clientreqOpt, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
  });

clientReq.write(JSON.stringify({key : 'value'}));
clientReq.end();


