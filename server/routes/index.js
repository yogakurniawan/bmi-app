var router = require('express').Router();

router.use('/', require('../api/users/users.routes'));
//router.use('/bmi', require('../api/users/bmi.routes'));

module.exports = router;