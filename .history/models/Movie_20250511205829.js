const mongoose=require("mongoose");

const movieSchema=new mongoose.Schema({
    name:{type:String,required:true},
    summarry:{type:String},
    image:{type:String}
})

module.exports=mongoose.model("Movie",movieSchema);