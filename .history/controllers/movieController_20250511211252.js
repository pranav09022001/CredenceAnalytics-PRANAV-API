const Movie = require("../models/Movie");
const movie=require("../models/Movie");

//Create Movie
exports.createMovie=async(req,res)=>{
try{
    const {name,summary}=req.body;
    const img=req.file? req.file.path:null;

    const movie= new Movie({name,summary,img});
    const saved =await movie.save();
    res.status(201).json(saved);  
}catch(err){
    res.status(400).json({message:err.message});
}
}

//Get All Movies

exports.getAllMovies=async(req,res)=>{
    try{
        const movies=await Movie.find();
        res.status(200).json(movies);
    }catch(err){
        res.status(400).json({message:err.message});
    }

}