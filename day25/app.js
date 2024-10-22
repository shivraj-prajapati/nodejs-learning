const express = require('express');
const app = express();
app.use(express.json()); 


app.get('/string', (req, res) => {
    res.send('Hello, this is a string response!'); 
    
});


app.get('/json', (req, res) => {
    const responseObject = {
        message: 'Hello, this is a JSON response!',
        status: 'success',
        data: [1, 2, 3, 4, 5]
    };
    res.send(responseObject); 
    
});



app.get('/html', (req, res) => {
    res.send('<h1>Hello, this is an HTML response!</h1>'); 
    
});



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
