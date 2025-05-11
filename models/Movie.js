const mongoose=require("mongoose");

const movieSchema=new mongoose.Schema({
    name:{type:String,required:true},
    img:{type:String},
    summary:{type:String},
    
})

module.exports=mongoose.model("Movie",movieSchema);