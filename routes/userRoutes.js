const express = require('express');
const router = express.Router();
const { load_user } = require('../middleware/loginMiddleware');

router.get('/',load_user);


module.exports = router;