const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Set response Content-Type to JSON
app.get('/json', (req, res) => {
    res.type('json');  // Sets Content-Type to application/json
    res.send({ message: 'This is a JSON response' });
  });

// Respond with different content based on Accept header
app.get('/data', (req, res) => {
  res.format({
    'text/plain': () => {
      res.send('This is plain text');  // Plain text response
    },
    'text/html': () => {
      res.send('<p>This is HTML</p>');  // HTML response
    },
    'application/json': () => {
      res.send({ message: 'This is JSON' });  // JSON response
    }
  });
});

// Send a file as an attachment
app.get('/download', (req, res) => {
  res.attachment('sample.pdf');  // Sets Content-Disposition to attachment; filename="sample.pdf"
  res.send('PDF content');       // Send file content for download
});
