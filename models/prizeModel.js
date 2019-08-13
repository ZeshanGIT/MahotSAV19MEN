var mongoose = require("mongoose");

var prizeSchema = new mongoose.Schema({
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
    event: { type: String },
    position: Number,
    score: Number,
});

module.exports = mongoose.model("Prize", prizeSchema);