const mongoose=require('mongoose');

//MongoDb Connection 
const ConnectDb = async()=>{
    try {
const url="mongodb+srv://pranavpokharkar9:adDNmK82cIfjWx1z@cluster0.f1fyrt3.mongodb.net/"
const connect=await mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
console.log("Connected to MongoDB");
return connect;
    }catch(error){
        console.log("Connection error MongoDB",error.message);

    }
}

module.exports=ConnectDb;