// Create web server
var express = require('express');
var app = express();

// create a route to handle GET requests
app.get('/comments', function(req, res) {
  res.json([
    { name: 'Tobi', comment: 'I am the best' },
    { name: 'Loki', comment: 'I am the second best' },
    { name: 'Jane', comment: 'I am the third best' }
  ]);
});

// start server
app.listen(3000);
console.log('Server listening on port 3000');