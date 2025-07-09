const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deathaidSchema = new Schema({
    member_id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    month:{
        type:Date,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    Total:{
        type:Number,
        required:true
    }
})



module.exports = mongoose.model("DeathaidModel", //model file name
    deathaidSchema  //function name
);