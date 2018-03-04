var router = require('express').Router();

router.use('/', require('../api/users/users.routes'));
router.use('/bmi', require('../api/bmi/bmi.routes'));

module.exports = router;