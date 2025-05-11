const express=require("express");
const ConnectDb=require("./config/db");
const movieRoutes=require("./routes/movieRoutes");
const cors=require("cors");
const app=express();

ConnectDb()

app.use(cors());
app.use(express.json());

app.use("/api/movies",movieRoutes);
app.use("/uploads",express.static("uploads"));

const Port= 3000;
app.listen(Port,()=>{
    console.log(`server is running on port ${Port}`);
    });
