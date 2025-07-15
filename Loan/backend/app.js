
//password:C5Ciqe2WPcf9Jkwm

const express = require("express");
const mongoose = require("mongoose");
const router = require("./Route/LoanRoute");

const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());
app.use("/loans",router);


mongoose.connect("mongodb+srv://admin:C5Ciqe2WPcf9Jkwm@cluster0.gowk9gk.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log((err)));