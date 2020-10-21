const express = require('express');
const router = express.Router();

const Client = require('../../models/client');

router.get('/register', function(req, res){
    res.send('Register Page');
})


// Below code: Post

module.exports = router;
