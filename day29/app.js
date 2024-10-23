const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Specify views directory

app.get('/', (req, res) => {
    res.render('index'); // Render 'index.ejs' file
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
