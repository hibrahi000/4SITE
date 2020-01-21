const { getAllCampuses } = require('../api/campusDB');
const { getStudentById } = require('../api/studentDB');

exports.campusPage_load = (req, res, next) => {
	console.log('Loading Login Page');
	getAllCampuses().then((data) => {
		res.send({ campusData: data });
	});
};

exports.createCampus;

exports.test_load = (req, res, next) => {
	// getStudentById(1).then((data) => console.log(data));
	// getAllCampuses().then(data => {
	// 	res.send({express : data});
	// })
	res.send({ express: 'EL TOTO' });
};
