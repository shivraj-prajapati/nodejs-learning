const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    res.redirect('/home');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
