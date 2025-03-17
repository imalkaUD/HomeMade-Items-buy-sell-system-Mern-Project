const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db');

dotenv.config();
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());


// Example route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
