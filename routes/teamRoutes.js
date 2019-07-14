var express = require("express"),
    router = express.Router(),
    Team = require("../models/teamModel.js");

router.get("/team", function (req, res) {
    Team.find(req.body, function (err, team) {
        if (err) {
            console.log(err)
        } else {
            console.log(team);
            res.send(team);
        }
    });
});

router.get("/team/:id", function (req, res) {
    Team.findById(req.params.id, function (err, team) {
        if (err) {
            console.log(err)
        } else {
            console.log(team);
            res.send(team);
        }
    });
});

router.post("/team", function (req, res) {
    Team.create(req.body, function (err, team) {
        if (err) {
            console.log(err);
        } else {
            console.log(team);
            res.send(team);
        }
    });
});

router.put("/team", function (req, res) {
    var id = req.body.id;
    delete req.body.id;
    Team.findByIdAndUpdate(id, req.body, { new: true }, function (err, team) {
        if (err) {
            console.log(err);
        } else {
            console.log(team);
            res.send(team);
        }
    });
});

router.delete("/team", function (req, res) {
    Team.remove(req.body, function (err, team) {
        if (err) {
            console.log(err);
        } else {
            console.log(team);
            res.send(team);
        }
    });
});

router.delete("/team/:id", function (req, res) {
    Team.findOneAndDelete({ "_id": req.params.id }, function (err, team) {
        if (err) {
            console.log(err);
        } else {
            console.log(team);
            res.send(team);
        }
    });
});
module.exports = router;
