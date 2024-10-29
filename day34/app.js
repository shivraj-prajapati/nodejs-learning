const express = require('express');
const app = express();

// Example: Get the root path of the application
console.log(app.path());

app.get('/check-content', (req, res) => {
  
  // req.fresh: Returns true if client's cache is fresh and no update is needed
  if (req.fresh) {
    res.status(304).send("Not Modified"); // 304 status means no new data sent
  } 
  // req.stale: Returns true if client's cache is stale, meaning data is outdated
  else if (req.stale) {
    res.status(200).send("Updated Content"); // Send fresh content if cache is stale
  } 
  else {
    res.status(200).send("Fresh Content"); // General fresh content if neither fresh nor stale
  }

});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
