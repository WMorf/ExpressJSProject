const express = require('express');
const router = express.Router();

// Middleware that runs for all /users routes
router.use((req, res, next) => {
  console.log('Users Router Time:', Date.now());
  next(); // Proceed to the next function or route
});

// GET /users/
router.get('/', (req, res) => {
  res.send('Users home page');
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const userId = req.params.id; // Extract the user ID from the URL
  res.send(`User profile for ID: ${userId}`);
});

module.exports = router; // Export the router so it can be used in app.js
