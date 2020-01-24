// ___ Library Imports
const bcrypt = require('bcrypt');

//___ Data Base Config Import
const db = require('../config/database');

//___ Model Imports
const company = require('../models/company');
const store = require('../models/store');
const users = require('../models/users');

//___ API Imports
const storeApi = require('./store');
const companyApi = require('./company');
const encrypt = require('./encrypt');

// ___ API Functions
exports.dbConnectionAuth = () => {
	// ++ The purpose of this function is to authenticate the connection to the postgres local database based on the config file
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

// :: CREATE

exports.addUser = async (firstName, lastName, user_name, password, company_id, store_id) => {
	const userObj = {
		first_name: firstName.toUpperCase(),
		last_name: lastName.toUpperCase(),
		user_name: user_name.toLowerCase(),
		password: await encrypt.encryptString(password).then((data) => data),
		company_id: company_id,
		store_id: store_id
	};
	users.create(userObj).then((newUser) => {
		console.log(
			`Successfully Created new User`,
			`User ID: ${newUser.id} <----> Store ID: ${newUser.store_id} <---> Company ID: ${newUser.company_id}`
		);
		campusApi.addStudent(newStudent.campus_id);
	});
};

// :: READ

exports.getAllUsers = async () => {
	return await users.findAll().then((users) => users).catch((err) => {
		console.log('Error finding Users', err);
	});
};

exports.getUserById = async (query) => {
	// console.log(query);
	return await users
		.findOne({
			where: { id: query }
		})
		.then((users) => users.dataValues)
		.catch((err) => console.log('Err User could not be found', err));
};

exports.getUserByFirstName = async (query) => {
	return await user
		.findAll({ where: { first_name: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query Users', err));
};

exports.getUserByLastName = async (query) => {
	return await user
		.findAll({ where: { last_name: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query', err));
};

exports.getUserByUserName = async (query) => {
	return await users
		.findAll({ where: { user_name: query } })
		.then((data) => data)
		.catch((err) => console.log('error in getting User by username', err));
};

exports.getUserByCompanyId = async (query) => {
	return await users
		.findAll({ where: { company_id: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query', err));
};

exports.getUserByStoreId = async (query) => {
	// console.log(query);
	return users
		.findAll({ where: { store_id: query } })
		.then((data) => data)
		.catch((err) => console.log('Err users could not be found', err));
};

// :: UPDATE

exports.updateUserFirstName = async (first_name, userId) => {
	this.getUserById(userId)
		.then(async (user) => {
			user.first_name = first_name;
			await user.save();
		})
		.catch((err) => console.log('ERROR: couldnt update user first name'));
};
exports.updateUserLastName = async (last_name, userId) => {
	this.getUserById(userId)
		.then(async (user) => {
			user.last_name = last_name;
			await user.save();
		})
		.catch((err) => console.log('ERROR: couldnt update user last name'));
};
exports.updateEmployeeUserName = async (user_name, userId) => {
	this.getEmployeeById(userId)
		.then(async (user) => {
			user.user_name = user_name;
			await user.save();
		})
		.catch((err) => console.log('ERROR: couldnt update user user name'));
};
exports.updateUserPassword = async (userId, newPassword) => {
	this.getUserById(userId).then(async (user) => {
		user.password = await encrypt.encryptString(newPassword).then((pass) => pass).catch((err) => console.log(err));
		await user.save();
	});
};
exports.updateUserStoreId = async (userId, newStoreId) => {
	this.getEmployeeById(userId).then(async (user) => {
		user.store_id = newStoreId;
		await user.save();
	});
};

// :: DELETE

exports.deleteUserById = async (userId) => {
	this.getUserByCompanyId(userId)
		.then((user) => {
			user.destroy();
		})
		.catch((err) => console.log('Couldnt delete Employee ID:' + employee.id, err));
};

exports.deleteUserByCompanyId = async (companyId) => {
	this.getUserByCompanyId(companyId).then((user) => {
		user.destroy();
	});
};

exports.deleteUserByStoreId = async (storeId) => {
	this.getUserByStoreId(storeId).then((user) => {
		user.destroy();
	});
};
