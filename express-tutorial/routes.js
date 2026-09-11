const express = require('express');
const app = express();
const port = 8080;

// Handle GET request to the root URL '/'
app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

// Handle POST request to the root URL '/'
app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

// Handle GET request to the '/about' URL
app.get('/about', (req, res) => {
  res.send('About page');
});

// Handle any request to any other route (wildcard)
app.all('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
