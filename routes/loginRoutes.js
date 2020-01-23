const express = require('express');
const router = express.Router();
const { login_load, validateUser} = require('../middleware/loginMiddleware');
const urlencoded = express.urlencoded({extended: true});

router.get('/', login_load);

router.post('/Validate',urlencoded, validateUser);

module.exports = router;