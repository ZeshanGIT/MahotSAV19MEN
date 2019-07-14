var mongoose = require("mongoose");

var eventSchema = new mongoose.Schema({
    eventName: { type: String, unique: true },
    not: Number,
    ppt: Number,
    mppt: Number,
    timing: {
        start: Number,
        end: Number,
    }
});

module.exports = mongoose.model("Event", eventSchema);