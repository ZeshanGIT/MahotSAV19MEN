var express = require("express"),
    router = express.Router(),
    Event = require("../models/eventModel.js");

router.post("/event", function (req, res) {
    Event.create(req.body, function (err, event) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(event);
            res.send(event);
        }
    });
});

router.get("/event", function (req, res) {
    Event.find(req.body, function (err, event) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(event);
        }
    });
});

router.get("/event/id", function (req, res) {
    Event.findOne(req.body, function (err, event) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(event);
        }
    });
});

router.put("/event", function (req, res) {
    console.log(req.body);
    var update = req.body;
    var id = req.body._id;
    delete update.id;
    Event.findOneAndUpdate(id, { $set: update }, { new: true }, function (err, newEvent) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newEvent);
            res.send(newEvent);
        }
    });
});

router.delete("/event", function (req, res) {
    Event.find(req.body).remove(function (err, event) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(event);
            res.send(event);
        }
    });
});

module.exports = router;
