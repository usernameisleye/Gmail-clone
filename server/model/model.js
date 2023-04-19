const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mailSchema = new Schema({
    recipient:{
        type: String,
        required: false
    },
    sender:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: false
    },
    subject:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Mail", mailSchema);