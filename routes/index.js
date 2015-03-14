var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.H.find(function (err, hotels) {
    if (err) throw err;
    db.R.find(function (err, rest) {
      if (err) throw err;
      db.T.find(function (err, things) {
        if (err) throw err;
        res.render('index', {title: 'Trip Planner', hotels: hotels, rest: rest, things: things});
        // next();
      })
    })
  })
});

module.exports = router;
