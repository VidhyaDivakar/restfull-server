const searchMovies = (req, res) => {
  res.send("Search Movies Route");
};

const getMovieDetails = (req, res) => {
  res.send("Movie Details Route");
};

module.exports = {
  searchMovies,
  getMovieDetails,
};