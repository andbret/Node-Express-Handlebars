var express = require("express");
var router = express.Router();

const burger = require("../models/burgerModel.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});
  
router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});
  
router.put("/api/burgers/:id", function(req, res) {
    var condition = req.params.id;

    console.log("condition", condition);

    burger.update(condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req, res) => {
    console.log("DELETE HIT!");
  
    const burgerId = req.params.id;
  
    console.log(burgerId);
  
    burger.remove(burgerId, function() {
      console.log("burger id " + burgerId + " was removed!");
  
      res.status(200).end();
    });
  });

  module.exports = router;
  