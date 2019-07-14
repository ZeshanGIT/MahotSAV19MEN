var express = require("express"),
    router = express.Router(),
    School = require("../models/schoolModel.js");

//Add school
router.post("/school", function (req, res) {
    School.create(req.body, function (err, school) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(school);
            res.send(school);
        }
    });
});

//Filter all schools
router.get("/school", function (req, res) {
    School.find(req.body, function (err, school) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(school);
        }
    });
});

//Get school by id
router.get("/school/id", function (req, res) {
    School.findOne(req.body, function (err, school) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(school);
        }
    });
});

router.put("/school", function (req, res) {
    console.log(req.body);
    var update = req.body;
    var id = req.body.id;
    delete update.id;
    School.findOneAndUpdate(id, { $set: update }, { new: true }, function (err, newSchool) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newSchool);
            res.send(newSchool);
        }
    });
});

router.delete("/school", function (req, res) {
    School.find(req.body).remove(function (err, school) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(school);
            res.send(school);
        }
    });
});

module.exports = router;
