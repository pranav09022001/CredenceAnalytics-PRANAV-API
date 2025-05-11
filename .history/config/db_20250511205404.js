const mongoose=require('mongoose');

const ConnectDb = async()=>{
    try {
const url="mongodb+srv://pranavpokharkar9:adDNmK82cIfjWx1z@cluster0.f1fyrt3.mongodb.net/"
const connect=await mongoose.connect(url);
console.log("Connected to MongoDB");
return connect;
    }catch(error){
        console.log("Connection error MongoDB",error.message);

    }
}