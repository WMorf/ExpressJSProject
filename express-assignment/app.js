const express = require('express');
const productsRouter = require('./routes/products');

const app = express();
const port = 8080;

app.use(express.json());
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});