const express=require("express");
const router=express.Router();
const upload=require("../middleware/Upload");
const {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
}=require("../controllers/movieController")