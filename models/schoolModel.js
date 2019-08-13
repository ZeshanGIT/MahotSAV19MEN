var mongoose = require("mongoose");

var schoolSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    abbr: String,
});

module.exports = mongoose.model("School", schoolSchema);