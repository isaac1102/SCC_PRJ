const express = require('express');
const router = express.Router();

const Client = require('../../models/client');

router.get('/login', function(req, res){
    res.send('Login Page');
})

// Below code: Post

module.exports = router;
