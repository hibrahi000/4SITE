const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { test_load, validateUser} = require('../middleware/loginMiddleware');
const urlencoded = bodyParser.urlencoded({ extended: false });


router.get('/', test_load)
router.post('/Validate', validateUser);

module.exports = router;