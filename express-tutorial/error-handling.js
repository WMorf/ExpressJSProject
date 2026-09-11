const express = require('express');
const app = express();
const port = 8080;

// Route that throws a synchronous error
app.get('/error', (req, res) => {
  // This will cause a synchronous error
  throw new Error('Something went wrong!');
});

// Route that causes an error in asynchronous code
app.get('/async-error', (req, res, next) => {
  // Simulate an asynchronous failure
  setTimeout(() => {
    try {
      const result = nonExistentFunction(); // This function does not exist
      res.send(result);
    } catch (error) {
      next(error); // Pass the error to the error-handling middleware
    }
  }, 100);
});

// Custom error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the full error stack trace
  res.status(500).send('Something broke!'); // Send a generic error response
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
