const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'Keyboard', price: 79.99 },
  { id: 2, name: 'Monitor', price: 249.00 },
  { id: 3, name: 'Headset', price: 35.99 },
  { id: 4, name: 'Tomato', price: .99 }
];

// Shape returned with every 400 so the caller knows what the API wants
const expected = {
  name: 'string (non-empty)',
  price: 'number (0 or higher)'
};

const example = { name: 'Webcam', price: 59.99 };

// GET /products
router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {

    // ERROR HANDLING: wrong content type
    if (!req.is('application/json')) {
    return res.status(415).json({
        error: 'Content-Type must be application/json',
        expected: expected,
        example: example
    });
    }

    // ERROR HANDLING: Missing body
    if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({
        error: 'Request body must be a JSON object',
        expected: expected,
        example: example
    });
    }

    const { name, price } = req.body;

    // ERROR HANDLING: Invalid Name
    if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({
        error: 'Name must be a non-empty string',
        received: typeof name,
        expected: expected
    });
    }

    // ERROR HANDLING: Invalid Price
    if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({
        error: 'Price must be a number of 0 or higher',
        received: typeof price,
        expected: expected
    });
    }

    const newProduct = { id: products.length + 1, name: name.trim(), price: price };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

module.exports = router;