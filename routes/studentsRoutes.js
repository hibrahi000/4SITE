const express = require('express');
const router = express.Router();
const { studentPage_load, deleteStudent, redirectStudent, addStudent } = require('../middleware/studentMiddleware');

router.get('/', studentPage_load);

router.delete('/', deleteStudent);

router.post('/Add_Student', addStudent, redirectStudent);



module.exports = router;