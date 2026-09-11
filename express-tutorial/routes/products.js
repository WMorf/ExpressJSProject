const express = require('express');
const router = express.Router();

// GET /products/
router.get('/', (req, res) => {
  res.send('Products list');
});

// GET /products/:id
router.get('/:id', (req, res) => {
  const productId = req.params.id; // Extract the product ID from the URL
  res.send(`Product details for ID: ${productId}`);
});

module.exports = router;
