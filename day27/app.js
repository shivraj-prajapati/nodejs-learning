
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
        if (err) {
            console.log('File could not be sent: ', err);
            res.status(500).send('Error sending file');
        }
    });
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
