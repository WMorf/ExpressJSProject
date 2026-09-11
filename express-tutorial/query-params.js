const express = require('express');
const app = express();
const port = 8080;

// Route that handles query parameters
app.get('/search', (req, res) => {
  const { q, category } = req.query; // Extract query parameters
  res.send(`Search query: ${q}, Category: ${category || 'none'}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
