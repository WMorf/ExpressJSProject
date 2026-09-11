const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files directly from the 'public' directory
app.use(express.static('public'));

// Serve the same files using a virtual path prefix
app.use('/static', express.static('public'));

// Serve static files using an absolute path (recommended for clarity)
app.use('/assets', express.static(path.join(__dirname, 'public')));

// Route that references static assets
app.get('/', (req, res) => {
  res.send(`
    <h1>Static Files Example</h1>
    <img src="/images/logo.png" alt="Logo">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/script.js"></script>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
