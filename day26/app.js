const express = require('express');
const app = express();
app.use(express.json()); 


app.get('/user', (req, res) => {
    const user = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    };
    res.json(user); 
});


app.get('/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 }
    ];
    res.json(products); 
});


app.get('/message', (req, res) => {
    const message = {
        status: 'success',
        message: 'This is a custom JSON message!'
    };
    res.json(message); 
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
