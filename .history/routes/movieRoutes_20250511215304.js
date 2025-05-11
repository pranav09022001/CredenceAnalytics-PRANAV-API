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

router.post("/create",upload.single('image'),createMovie);
router.get("/",getAllMovies);
router.put("/:id",upload.single('image'),updateMovie);
router.delete("/:id",deleteMovie);

module.exports=router;