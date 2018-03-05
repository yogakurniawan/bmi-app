var BMI = require('./bmi.model');

exports.getBMI = function (req, res) {
    var bmi = null;
    var unit = req.body.unit;
    var mass = req.body.mass;
    var height = req.body.height;

    if(unit === BMI.units.METRIC){
        bmi = BMI.metricUnits(mass, height);
        res.status(200);
    } else if( unit === BMI.units.USC){
        bmi = BMI.uscUnits(mass, height);
        res.status(200);
    } else {
        res.status(400);
    }

    return res.json({ bmi: bmi });
};