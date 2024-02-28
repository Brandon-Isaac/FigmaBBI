const express = require('express');

const app = express();
const port = 3000; // You can use any port you prefer

// Serve static files from the 'public' directory

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Add more routes as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
