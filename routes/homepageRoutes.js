const express = require('express');
const router = express.Router();
const { homepage_load } = require('../middleware/homepageMiddleware');

router.get('/',homepage_load);


module.exports = router;