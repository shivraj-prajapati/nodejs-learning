const express = require('express');
const app = express();
const port = 3000;


app.get('/api/data', (req, res) => {
    
    res.set({
        'Content-Type': 'application/json', 
        'Cache-Control': 'no-store',         
        'X-Custom-Header': 'hey-buddy'         
    });

    
    res.send(JSON.stringify({ message: 'Hey i am data in Json formate.' }));
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
