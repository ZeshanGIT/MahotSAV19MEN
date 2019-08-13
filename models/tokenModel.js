var mongoose = require("mongoose");

var tokenSchema = new mongoose.Schema({
    schoolName: { type: Schema.Types.ObjectId, ref: 'School' },
    eventName: { type: String, unique: true },
});

module.exports = mongoose.model("Token", tokenSchema);