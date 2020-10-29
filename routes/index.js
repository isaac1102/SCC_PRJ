const router = require('express').Router();

router.use('/accounts', require('./account'));

module.exports = router;
