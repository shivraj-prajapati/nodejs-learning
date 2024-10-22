const express = require('express');
const app = express();

// Body Parser Middleware
app.use(express.json()); 

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.originalUrl}`);
    next();
});

// Authentication Middleware
app.use((req, res, next) => {
    const isAuthenticated = true;
    if (isAuthenticated) {
        next(); 
    } else {
        res.status(401).send('Unauthorized'); 
    }
});

app.get('/api/data', (req, res) => {
    res.send('This is some protected data');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000'); 
});
