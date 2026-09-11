const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the "public" folder
app.use(express.static('public'));

// Route to handle POST requests with JSON data
app.post('/api/users', (req, res) => {
  // req.body contains parsed JSON from the request
  console.log(req.body);
  res.status(201).json({
    message: 'User created',
    user: req.body
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
