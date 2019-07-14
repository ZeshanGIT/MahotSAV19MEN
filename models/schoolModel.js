var mongoose = require("mongoose");

var schoolSchema = new mongoose.Schema({
    schoolName: { type: String, unique: true },
    schoolAbbr: String
});

module.exports = mongoose.model("School", schoolSchema);
