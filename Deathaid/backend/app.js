const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/DeathaidRoute");

const app = express();
const cors = require("cors");


//Middleware
app.use(express.json());    //middleware to parse the json data
app.use(cors());
app.use("/deathaid",router);


//connect with MongoDB
mongoose.connect("mongodb+srv://admin:IU557UrjNnHOupXZ@cluster0.wsf53yd.mongodb.net/")
.then(()=>{
    console.log("Connected to MongoDB!");
})
.then(()=>{
    app.listen(5000);
})
.catch((err)=>{
    console.log(err);
})
