const express = require('express');
const router = express.Router();
const { load_user, load_company, load_stores, load_homePage ,loadAllEmployees} = require('../middleware/userMiddleware');

router.get('/',load_user, load_stores, load_company, load_homePage);

router.get('/GetEmployees', loadAllEmployees)

// , load_stores, load_company, load_homePage
module.exports = router;