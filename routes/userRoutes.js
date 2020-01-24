const express = require('express');
const router = express.Router();
const { load_user, load_company, load_stores, load_homePage } = require('../middleware/userMiddleware');

router.get('/',load_user, load_stores, load_company, load_homePage);

// , load_stores, load_company, load_homePage
module.exports = router;