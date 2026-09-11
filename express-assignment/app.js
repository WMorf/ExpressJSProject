const express = require('express');
const productsRouter = require('./routes/products');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static('public'));
app.use('/products', productsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  // malformed JSON from express.json() arrives as a SyntaxError
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ error: 'Request body is not valid JSON' });
  }

  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
