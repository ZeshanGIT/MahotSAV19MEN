var mongoose = require("mongoose");

var leaderboardSchema = new mongoose.Schema({
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
    score: Number
});

module.exports = mongoose.model("Leaderboard", leaderboardSchema);