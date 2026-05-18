const express = require("express");

const router = express.Router();

// Import controller functions
const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

// Routes
router.get("/search", searchMovies);

router.get("/movies/:id", getMovieDetails);

module.exports = router;