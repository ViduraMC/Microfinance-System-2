const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loanSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    interest_rate: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model("LoanModel", loanSchema);