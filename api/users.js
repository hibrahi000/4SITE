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
	bcrypt.genSalt(10, (err, salt) =>
		bcrypt
			.hash(password, salt)
			.then((hash, err) => {
				const userObj = {
					first_name: firstName.toUpperCase(),
					last_name: lastName.toUpperCase(),
					user_name: user_name.toLowerCase(),
					password: hash,
					company_id: company_id,
					store_id: store_id
				};

				users.create(userObj).then((newUser) => {
					console.log(
						`Successfully Created new User`,
						`User ID: ${newUser.id} <----> Store ID: ${newUser.store_id} <---> Company ID: ${newUser.company_id}`
					);
					storeApi.addEmployee(newUser.store_id);
				});
			})
			.catch(() => console.log('Error encrypting'))
	);
	console.log(await password);
};

// :: READ

exports.getAllUsers = async () => {
	return await users.findAll().then((users) => users).catch((err) => {
		console.log('Error finding Users', err);
	});
};

exports.getUserById = async (query) => {
	// console.log(query);
	return users
		.findOne({
			where: { id: query }
		})
		.then((users) => users.dataValues)
		.catch((err) => console.log('Err User could not be found', err));
};

exports.getUserByFirstName = async (query) => {
	return user
		.findAll({ where: { first_name: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query Users', err));
};

exports.getUserByLastName = async (query) => {
	return user
		.findAll({ where: { last_name: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query', err));
};

exports.getUserByUserName = async (query) => {
	return users
		.findOne({ where: { user_name: query } })
		.then((data) => data)
		.catch((err) => console.log('error in getting User by username', err));
};

exports.getUserByCompanyId = async (query) => {
	return users
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
	users
		.findOne({ where: { id: userId } })
		.then(async (user) => {
			user.first_name = first_name;
			await user.save();
		})
		.catch((err) => console.log('ERROR: couldnt update user first name'));
};
exports.updateUserLastName = async (last_name, userId) => {
	users
		.findOne({ where: { id: userId } })
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
	users.findOne({ where: { id: userId } }).then((user) => {
		bcrypt.genSalt(10, (err, salt) =>
			bcrypt
				.hash(newPassword, salt)
				.then((hash, err) => {
					console.log(hash);

					// users.update({ password: hash, where: { id: user.id } });
				})
				.catch(() => console.log('Error encrypting'))
		);
	});
};
exports.updateUserStoreId = async (userId, newStoreId) => {
	users.findOne({ where: { id: userId } }).then(async (user) => {
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
