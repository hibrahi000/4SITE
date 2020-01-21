const db = require('../config/database');
const op = require('sequelize');
const student = require('../models/student');
const campus = require('../models/campus');
const campusApi = require('../api/campusDB');
exports.dbConnectionAuth = () => {
	db
		.authenticate()
		.then(function(err) {
			console.log('Connection has been established successfully.');

			// campus.findAll().then((data) => console.log(data,'this is printing'));
		})
		.catch(function(err) {
			console.log('Unable to connect to the database:', err);
		});
};

exports.getAllStudents = async () => {
	return await student.findAll().then((students) => students).catch((err) => {
		console.log('Error finding students', err);
	});
};

exports.getStudentById = async (query) => {
	// console.log(query);
	return await student
		.findOne({
			where: { id: query }
		})
		.then((student) => student.dataValues)
		.catch((err) => console.log('Err student could not be found', err));
};
exports.getStudentByIdArray = async (queryArry, studentArray) => {
	// console.log(query);
	return studentArray
		.push(
			await student
				.findAll({
					where: { id: queryArry[queryArry.length - 1] }
				})
				.then((student) => {
					if (queryArry.length !== 0) {
						queryArry.pop();
						this.getStudentByIdArray(queryArry, studentArray);
					} else {
						return student;
					}
				})
		)
		.catch((err) => console.log('Err student could not be found', err));
};
exports.getStudentByFirstName = async (query) => {
	return await campus
		.findAll({ where: { university: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};
exports.getStudentByLastName = async (query) => {
	return await campus
		.findAll({ where: { location: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};
//+++ Gender query needs further thought
// exports.getStudentByGender = async(gender) => {
// 	return await campus.findAll({where: {number_of_students : query}}).then(data => data).catch((err) => console.log('error in query'));

// }
exports.getStudentByEmail = async (query) => {
	return await campus
		.findAll({ where: { email: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};

exports.getStudentByDOB = async (query) => {
	return await campus
		.findAll({ where: { date_of_birth: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};

exports.getStudentsByCampusID = async (query) => {
	return await student
		.findAll({ where: { campus_id: query } })
		.then((data) => data)
		.catch((err) => console.log('error in getting students by campus id'));
};

exports.addStudent = async (firstName, lastName, gender, email, dob, campusId) => {
	const studentObj = {
		first_name: firstName.toUpperCase(),
		last_name: lastName.toUpperCase(),
		gender: gender.toUpperCase(),
		email: email,
		date_of_birth: dob,
		campus_id: campusId
	};
	student.create(studentObj).then((newStudent) => {
		console.log(
			`Successfully Created new student`,
			`Student ID: ${newStudent.id} <----> Campus ID: ${newStudent.campus_id}`
		);
		campusApi.addStudent(newStudent.campus_id);
	});
};

exports.popStudent = async (studentId) => {
	studentId = `${studentId}`;
	this.getAllStudents()
		.then((studentList) => {
			let studentIndex = studentList.findIndex((studentObj) => {
				console.log(`
					${studentObj.dataValues.id}
					${studentId}
					${studentObj.dataValues.id === studentId}
					`);
				return studentObj.dataValues.id === studentId;
			});
			console.log(studentList[studentIndex]);
			let campusID = studentList[studentIndex].dataValues.campus_id;
			console.log(campusID);
			campusApi
				.popStudent(campusID)
				.then(() => {
					studentList[studentIndex]
						.destroy()
						.then(() => console.log('Student removed from Student DB'))
						.catch((err) => console.log('Err in removing student from Student DB', err));
				})
				.catch((err) => console.log('Error student and campus was not updated', err));
		})
		.catch((err) => console.log('couldnt get list of students'));
};
