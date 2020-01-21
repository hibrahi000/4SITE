const db = require('../config/database');
const campus = require('../models/campus');
const studentAPI = require('../api/studentDB');
exports.testDB = () => {
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

this.testDB();

exports.getAllCampuses = async () => {
	return await campus.findAll().then((data) => {
		// console.log(data);
		return data;
	});
};
exports.getCampusById = async (query) => {
	console.log(query);
	return await campus
		.findOne({ where: { id: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};
exports.getCampusByUniversity = async (query) => {
	return await campus
		.findAll({ where: { university: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};
exports.getCampusByLocation = async (query) => {
	return await campus
		.findAll({ where: { location: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};
exports.getCampusByNumberOfStudents = async (query) => {
	return await campus
		.findAll({ where: { number_of_students: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};

exports.addCampus = async (universityName, locationName) => {
	const campusObj = {
		university: universityName,
		location: locationName,
		number_of_students: 0
	};
	campus
		.create(campusObj)
		.then((newCampus) => console.log(`Successfully Created new campus ID: ${newCampus.id}`))
		.catch((err) => console.log('Err Campus could not be made', err));
};

exports.removeCampus = async (campusId) => {
	campus.findOne({ where: { id: campusId } }).then((campusObj) => {
		studentAPI
			.getStudentsByCampusID(campusId)
			.then((studentList) => {
				console.log(studentList, 'This is the student list');
				// console.log(studentObj);
				studentList.forEach((studentObj) => {
					studentObj.destroy();
				});
				campusObj.destroy();
			})
			.then(() => console.log('successfully removed campus and all students associated with it '))
			.catch((err) => console.log('Couldnt remove Campus or students', err));
	});
};

exports.addStudent = async (campusId) => {
	campus
		.findOne({ where: { id: campusId } })
		.then((campusObj) => {
			campusObj
				.increment('number_of_students', { by: 1 })
				.then(() => console.log('Number of Students was Incremented'));
		})
		.catch((err) => console.log('Err could not find campus', err));
};

exports.popStudent = async (campusId) => {
	campus
		.findOne({ where: { id: campusId } })
		.then((campusObj) => {
			if (campusObj.number_of_students > 0) {
				campusObj
					.decrement('number_of_students', { by: 1 })
					.then(() => console.log('Number of Students was Decremented'));
			} else {
				console.log('Err the campus table has no more students to remove');
			}
		})
		.catch((err) => console.log('Err could not  find campus', err));
};
