const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Keyboard', price: 79.99 },
  { id: 2, name: 'Monitor', price: 249.00 },
  { id: 3, name: 'Headset', price: 35.99 },
  { id: 4, name: 'Tomato', price: .99 }
];

// GET /products
router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  const { name, price } = req.body;

  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Name must be a non-empty string' });
  }

  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ error: 'Price must be a number of 0 or higher' });
  }

  const newProduct = { id: products.length + 1, name: name.trim(), price: price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;