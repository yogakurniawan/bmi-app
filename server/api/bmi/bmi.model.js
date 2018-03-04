const UNITS = {
    METRIC: 1,
    USC: 2
};

/*
 metricUnits = mass(kg) / height2 (m)
 */

var metricUnits = function (mass, height) {
    return (mass / (height*height));
};

/*
 uscUnits = 703 * mass(lbs) / height2 (in)
 */

var uscUnits = function (mass, height) {
    return (703 * (mass / (height*height)))
};

module.exports = {
  units: UNITS,
  metricUnits: metricUnits,
  uscUnits: uscUnits
};