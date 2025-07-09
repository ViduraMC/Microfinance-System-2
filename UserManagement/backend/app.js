//pass=Wb96pxQyGGwWpeM/
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/UserRoute");

const app = express();
const cors = require("cors");

//Middleware//
app.use(express.json());
app.use(cors());
app.use("/users",router);


 mongoose.connect("mongodb+srv://admindila:Wb96pxQyGGwWpeM@cluster0.2dvt4ao.mongodb.net/yasas1db?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("Connected to mongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log(err));