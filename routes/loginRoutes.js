const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const { test_load, validateUser} = require('../middleware/loginMiddleware');


router.get('/', test_load)
router.post('/', (req,res,next) => {
    console.log(req.query);
    res.send({express : 'express'});
})

router.post('/Validate', validateUser);

module.exports = router;