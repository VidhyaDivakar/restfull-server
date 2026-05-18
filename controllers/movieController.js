const axios = require("axios");

const BASE_URL = "http://www.omdbapi.com/";

const searchMovies = async (req, res) => {
    try {
        const title = req.query.title;


        if (!title) {
            return res.status(400).json({
                error: "Title query parameter is required",
            });
        }

        const response = await axios.get(BASE_URL, {
            params: {
                s: title,
                apikey: process.env.OMDB_API_KEY,
            },
        });

        res.json(response.data);

    } catch (error) {
        console.error("Error fetching movies:", error.message);

        res.status(500).json({
            error: "Failed to fetch movies",
        });
    }
};

// Get Movie Details Controller
const getMovieDetails = async (req, res) => {
    try {
        const movieId = req.params.id;
        const response = await axios.get(BASE_URL, {
            params: {
                i: movieId,
                apikey: process.env.OMDB_API_KEY,
            },
        });

        res.json(response.data);

    } catch (error) {
          console.error(error.response?.data || error.message);

        res.status(500).json({
            error: "Failed to fetch movie details",
        });
    }
};

module.exports = {
    searchMovies,
    getMovieDetails,
};