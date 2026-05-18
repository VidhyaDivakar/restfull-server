// Load environment variables
require("dotenv").config();

// Dependencies
const express = require("express");

const app = express();
const PORT = 3001;
const movieRoutes = require("./routes/movieRoutes");

// Middleware
app.use(express.json());

// routes
app.use("/api", movieRoutes);

// Ports
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});