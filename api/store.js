//___ Data Base Config Import
const db = require('../config/database');

//___ Model Imports
const company = require('../models/company');
const store = require('../models/store');
const employee = require('../models/employee');

//___ API Imports
const storeApi = require('./store');
const companyApi = require('./company');

// ___ API Functions
exports.dbConnectionAuth = () => {
	// ++ The purpose of this function is to authenticate the connection to the postgres local database based on the config file
	db
		.authenticate()
		.then(function(err) {
			console.log('Connection has been established successfully.');
		})
		.catch(function(err) {
			console.log('Unable to connect to the database:', err);
		});
};

// :: CREATE

exports.addStore = async (location, number_of_employees, company_id) => {
	const storeObj = {
		location: location.toUpperCase(),
		number_of_employees: number_of_employees,
		company_id: company_id
	};
	store
		.create(storeObj)
		.then((newStore) => {
			console.log(
				`Successfully Created new Store`,
				`Store ID: ${newStore.id} <----> Company ID: ${newStore.company_id}`
			);
		})
		.catch((err) => console.log('Error couldnt create store', err));
};

// :: READ

exports.getAllStores = async () => {
	return await store.findAll().then((stores) => stores).catch((err) => {
		console.log('Error finding Stores', err);
	});
};

exports.getStoreById = async (query) => {
	return await store
		.findOne({ where: { id: query } })
		.then((store) => store.dataValues)
		.catch((err) => console.log('Err Store could not be found', err));
};

exports.getStoreByCompanyId = async (query) => {
	return await store
		.findAll({ where: { company_id: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query Store', err));
};

exports.getStoreByNumberOfEmployee = async (query) => {
	return await store
		.findAll({ where: { number_of_employees: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query', err));
};

// :: UPDATE
exports.addEmployee = async (store_id) => {
	store.findOne({ where: { id: store_id } }).then((storeObj) => {
		if (storeObj.number_of_employees !== 0) {
			storeObj.increment('number_of_employees', { by: 1 }).then(() => console.log('Number of employees was Incremented')).catch(err =>  console.log());
		}
	});
};
exports.removeEmployee = async (store_id) => {
	store.findOne({ where: { id: store_id } }).then((storeObj) => {
		if (storeObj.number_of_employees !== 0) {
			storeObj.decrement('number_of_employees', { by: 1 }).then(() => console.log('Number of employees was Decremented')).catch(err =>  console.log());
		}
	});
};

// :: DELETE

exports.deleteStoreById = async (storeId) => {
	store
		.findOne({ where: { id: storeId } })
		.then((store) => {
			console.log(`Store Id:${store.id} removed`);
			store.destroy();
		})
		.catch((err) => console.log('Couldnt delete Store ID:' + store.id, err));
};
