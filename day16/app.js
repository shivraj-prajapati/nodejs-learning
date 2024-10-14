// we need to without run this file initialize npm command
// npm init -y or npm init
// npm install express

const express =  require('express');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    console.log("GET request received");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// Changes in package.json file
// "scripts": {
//     "start" : "node app.js",
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },


// Run Command : npm start