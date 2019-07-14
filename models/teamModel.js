var mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
    schoolID: String,
    eventName: String,
    teamNo: Number,
    participants: [String]
});

module.exports = mongoose.model("Team", teamSchema);