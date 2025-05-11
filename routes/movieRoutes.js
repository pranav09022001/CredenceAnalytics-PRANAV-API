const express=require("express");
const router=express.Router();
const upload=require("../middleware/Upload");
const {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie
}=require("../controllers/movieController");

//Create movie route
router.post("/create",upload.single('img'),createMovie);

//Get all movies route
router.get("/",getAllMovies);

//Get movie by id route
router.get("/:id",getMovieById)

//Update movie route
router.put("/update/:id",upload.single('img'),updateMovie);

//Delete movie route
router.delete("/delete/:id",deleteMovie);

module.exports=router;