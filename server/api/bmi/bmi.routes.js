var router = require('express').Router();
var BMIController = require('./bmi.controller');

// POST route
router.post('/', function (req, res, next) {
    BMIController.getBMI(req, res, next);
});

module.exports = router;