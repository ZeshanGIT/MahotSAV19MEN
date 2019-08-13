var express = require("express"),
    router = express.Router(),
    Leaderboard = require("../models/leaderboardModel.js"),
    Prize = require("../models/prizeModel.js");

router.post("/prize", function (req, res) {
    Prize.create(req.body, function (err, prize) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(prize);
            Leaderboard.findOne({ school: prize["school"] }, function (err, leaderboard) {
                if (err) {
                    console.log(err);
                } else {
                    leaderboard.score += prize.score;
                    leaderboard.save(function (err) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(leaderboard);
                        }
                    });
                    // console.log(leaderboard);
                }
            });
            res.send(prize);
        }
    });
});

router.get("/prize", function (req, res) {
    Prize.find(req.query).populate('school').exec(function (err, prize) {
        if (err) {
            console.log(err);
        }
        else {
            res.send(prize);
        }
    });
});

router.put("/prize", function (req, res) {
    console.log(req.body);
    var id = req.body.id;
    var update = req.body.update;
    delete update.id
    // res.send(JSON.stringify(req.body.update));
    Prize.findOneAndUpdate(id, { $set: update }, { new: true }, function (err, newPrize) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(newPrize);
            res.send(newPrize);
        }
    });
});

router.delete("/prize", function (req, res) {
    Prize.find(req.body).remove(function (err, prize) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(prize);
            res.send(prize);
        }
    });
});

module.exports = router;