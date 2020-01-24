// ___ Library Imports
const bcrypt = require('bcrypt');

//___ Data Base Config Import
const db = require('../config/database');

//___ Model Imports
const company = require('../models/company');
const store = require('../models/store');
const employee = require('../models/employee');

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

exports.addEmployee = async (firstName, lastName, company_id, store_id) => {
	const employeeObj = {
		first_name: firstName.toUpperCase(),
		last_name: lastName.toUpperCase(),
		company_id: company_id,
		store_id: store_id
	};
	employee.create(employeeObj).then((newEmployee) => {
		console.log(
			`Successfully Created new Employee`,
			`Employee ID: ${newEmployee.id} <----> Store ID: ${newEmployee.store_id} <---> Company ID: ${newEmployee.company_id}`
		);
		storeApi.addEmployee(newEmployee.store_id);
	});
};

// :: READ

exports.getAllEmployees = async () => {
	return await employee.findAll().then((employees) => employees).catch((err) => {
		console.log('Error finding Employees', err);
	});
};

exports.getEmployeeById = async (query) => {
	// console.log(query);
	return await employee
		.findOne({
			where: { id: query }
		})
		.then((employee) => employee.dataValues)
		.catch((err) => console.log('Err Employee could not be found', err));
};

exports.getEmployeeByFirstName = async (query) => {
	return await employee
		.findAll({ where: { first_name: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query Employee', err));
};

exports.getEmployeeByLastName = async (query) => {
	return await employee
		.findAll({ where: { last_name: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query', err));
};

exports.getEmployeeByCompanyId = async (query) => {
	return await employee
		.findAll({ where: { company_id: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query', err));
};

exports.getEmployeeByStoreId = async (query) => {
	// console.log(query);
	return employee
		.findAll({ where: { store_id: query } })
		.then((data) => data)
		.catch((err) => console.log('Err student could not be found', err));
};

// :: UPDATE

exports.updateEmployeeFirstName = async (first_name, employeeId) => {
	this.getEmployeeById(employeeId)
		.then(async (employee) => {
			employee.first_name = first_name;
			await employee.save();
		})
		.catch((err) => console.log('ERROR: couldnt update employee first name'));
};
exports.updateEmployeeLastName = async (last_name, employeeId) => {
	this.getEmployeeById(employeeId)
		.then(async (employee) => {
			employee.last_name = last_name;
			await employee.save();
		})
		.catch((err) => console.log('ERROR: couldnt update employee last name'));
};
exports.updateEmployeeStoreId = async (employeeId, newStoreId) => {
	this.getEmployeeById(employeeId).then(async (employee) => {
		employee.store_id = newStoreId;
		await employee.save();
	});
};

// :: DELETE

exports.deleteEmployeeById = async (employeeId) => {
	this.getUserByCompanyId(employeeId)
		.then((employee) => {
			employee.destroy();
		})
		.catch((err) => console.log('Couldnt delete Employee ID:' + employee.id, err));
};

exports.deleteEmployeeByCompanyId = async (companyId) => {
	this.getUserByCompanyId(companyId).then((employee) => {
		employee.destroy();
	});
};

exports.deleteEmployeeByStoreId = async (storeId) => {
	this.getUserByStoreId(storeId).then((employee) => {
		employee.destroy();
	});
};

