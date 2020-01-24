const express = require('express');
const router = express.Router();
const { load_user, authenticateUser } = require('../middleware/loginMiddleware');

router.get('/Authenticated',authenticateUser);


module.exports = router;