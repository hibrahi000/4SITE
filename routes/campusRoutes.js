const express = require('express');
const router = express.Router();
const { campusPage_load } = require('../middleware/campusMiddleware');

router.get('/', campusPage_load);


module.exports = router;