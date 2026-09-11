const express = require('express');
const usersRouter = require('./routes/users'); // Import users routes
const productsRouter = require('./routes/products'); // Import products routes

const app = express();
const port = 8080;

// Mount the routers
app.use('/users', usersRouter); // All routes in usersRouter will be prefixed with /users
app.use('/products', productsRouter); // All routes in productsRouter will be prefixed with /products

// Define a root route
app.get('/', (req, res) => {
  res.send('Main application home page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
