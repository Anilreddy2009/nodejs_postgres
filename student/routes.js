const { Router } = require('express');
const controller=require('./constoller');
const router=Router();

router.get('/student',controller.getStudents);
router.get('/student/:id',controller.getStudentById);
router.post('/student',controller.addStudent);
router.delete('/student/:id',controller.removeStudent);

module.exports=router;