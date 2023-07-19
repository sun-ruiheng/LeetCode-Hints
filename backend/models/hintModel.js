const mongoose = require("mongoose");

const hintSchema = new mongoose.Schema({
    question: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model("Hint", hintSchema);