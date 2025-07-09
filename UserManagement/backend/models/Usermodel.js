const  mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type:String,//datatype//
        required:true,//validation//
    },

    gmail: {
        type:String,//datatype//
        required:true,//validation//
    },
    
    age:{
        type:Number,
        required:true,//validate
    },
    address:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model(
    "UserModel",//file Name
    userSchema // function name

)