const express = require('express');
const app = express();

// app.all() to handle all HTTP methods for a specific route
app.all('/test', (req, res) => {
    res.send(`Request received with method: ${req.method}`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
