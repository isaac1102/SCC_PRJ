const router = require('express').Router();

router.use('/accounts', require('./account'));
router.use('/qna', require('./qna')); 

module.exports = router;
