const express = require('express');
const app = express();
const port = 8080;

// Route using parameters in the URL
app.get('/users/:userId/books/:bookId', (req, res) => {
  const { userId, bookId } = req.params; // Extract parameters
  res.send(`User ID: ${userId}, Book ID: ${bookId}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
