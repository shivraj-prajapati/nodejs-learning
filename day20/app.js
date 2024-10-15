//npm install express multer
//npm install --save-dev nodemon      (it is used to restart the server automatically when we make changes in the code)
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

// 1. Simple POST request
app.post('/submit', (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    req.on('end', () => {
        res.send(body);
    })
});

// 2. Store Data in a File
app.post('/submit-file', (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    })
    req.on('end', () => {
        fs.writeFile('data.txt', body, (err) =>{
            if(err) {
                return res.status(500).send('Error writing to file');
            } else {
                res.send('Data saved successfully!');
            }
        });
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});