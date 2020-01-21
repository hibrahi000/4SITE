const { getAllCampuses } = require('../api/campusDB');
const { getStudentById, getAllStudents, popStudent} = require('../api/studentDB');

exports.studentPage_load = (req, res, next) => {
	getAllStudents().then((studentList) => {
		res.send({ studentData: studentList });
	});
};


exports.deleteStudent = (req,res,next) => {
	let {studentId} = req.query;
	console.log(studentId);
	popStudent(studentId).then(() => {})

}
exports.redirectStudent = (req,res,next) => {
	res.redirect('http://localhost:3000/Students');
}
exports.addStudent = (req,res,next) => {
	let {first_name,last_name,gender,email,date_of_birth} = req.body;
	console.log(req.body);
}





exports.test_load = (req, res, next) => {
	// getStudentById(1).then((data) => console.log(data));
	// getAllCampuses().then(data => {
	// 	res.send({express : data});
	// })
};
