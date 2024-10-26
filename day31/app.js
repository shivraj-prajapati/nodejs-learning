const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>Hello, World!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end(); 
});

app.get('/api/data', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Custom-Header', 'HelloWorld'); 
    
    const data = { message: 'Hello from JSON API!' };
    res.end(JSON.stringify(data)); 
  });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
