const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// 1 . Simple GET request
app.get('/', (req, res) => {
    res.send('Hello World');
})
// Paste on Server or Chrome : http://localhost:3000/


// 2: GET request with a route parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;  // Route parameter ko access karte hain
    res.send(`User ID: ${userId}`);
});
// Paste on Server or Chrome : http://localhost:3000/user/123

// 3: GET request with query parameters
app.get('/search', (req, res) => {
    const name = req.query.name; 
    const age = req.query.age; 
    const gender = req.query.gender; 
    
    res.send(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
});

// Paste on Server or Chrome : http://localhost:3000/search?name=John&age=30

app.get('/users', (req, res) => {
    fs.readFile("./data.json", 'utf-8', (err, data) => {
        if (err){
            res.status(500).send('Internal Server Error');
        } else {
            res.send(JSON.parse(data));
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});