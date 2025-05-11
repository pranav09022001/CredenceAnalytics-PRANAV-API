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

router.post("/create",upload.single('img'),createMovie);
router.get("/",getAllMovies);
router.get("/:id",getMovieById)
router.put("/update/:id",upload.single('img'),updateMovie);
router.delete("/delete/:id",deleteMovie);

module.exports=router;