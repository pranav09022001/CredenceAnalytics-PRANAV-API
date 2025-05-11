const Movie = require("../models/Movie");
const movie = require("../models/Movie");

//Create Movie
exports.createMovie = async (req, res) => {
  try {
    const { name, summary } = req.body;
    const img = req.file ? req.file.path : null;
    // Check if a movie with the same name exists
    const existing = await Movie.findOne({ name: name.trim() });
    if (existing) {
      return res
        .status(400)
        .json({ error: "Movie with the same name already exists." });
    }

    const movie = new Movie({ name, summary, img });
    const saved = await movie.save();
    res.status(201).json({ message: "Movie created successfully"},saved);
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Get All Movies

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    if (movies.length === 0) {
        return res.status(200).json({
          message: "No movies found",
          data: [],
        });
      }

    res.status(200).json({message: "Movie get successfully"},data:movies);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//Get movie by id 
exports.getMovieById = async (req, res) =>{
    try {
        const movie = await Movie.findById(req.params.id);
        if(!movie) return res.status(404).json({ message: "Movie not found" }); 
           
            res.status(200).json(movie);
            } catch (err) {
                res.status(400).json({ message: err.message });
                }
}

//Update Movie by id
exports.updateMovie = async (req, res) => {
    try {
      const updates = req.body;
      if (req.file) updates.img = req.file.path;
  
      const movie = await Movie.findByIdAndUpdate(req.params.id, updates, { new: true });
      if (!movie) return res.status(404).json({ error: "Movie not found" });
      res.json(movie);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  //Delete Movie
  exports.deleteMovie = async (req, res) => {
    try {
      const result = await Movie.findByIdAndDelete(req.params.id);
      if (!result) return res.status(404).json({ error: "Movie not found" });
      res.json({ message: "Movie deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };