const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require("./Routes/LoginRoute");
const UserModel = require("./Model/UserModel");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/login", loginRouter);

// Connect with MongoDB
mongoose.connect("mongodb+srv://admin:IU557UrjNnHOupXZ@cluster0.wsf53yd.mongodb.net/")
.then(async () => {
    console.log("Connected to MongoDB!");
    // Insert sample user if not exists
    const existing = await UserModel.findOne({ username: "admin" });
    if (!existing) {
        await UserModel.create({ username: "admin", password: "12345" });
        console.log("Sample user created: admin/12345");
    }
    app.listen(5001, () => console.log("Login backend running on port 5001"));
})
.catch((err) => {
    console.log(err);
}); 