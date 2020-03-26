//___ Data Base Config Import
const db = require('../config/database');

//___ Model Imports
const equipment = require('../models/equipment');
const storeEquipment = require('../models/storeEquipment');

//___ API Imports
const storeEquipment = require('./storeEquipment');
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
exports.addEquipmentRelation = async (store_id, equipment_id) => {
	const relationObj = {
		store_id: store_id,
		equipment_id: equipment_id
	};
	storeEquipment
		.create(relationObj)
		.then((newRelation) => {
			console.log(
				`Successfully Created new Equipment`,
				`Store ID: ${newRelation.store_id} <----> Equipment ID: ${newRelation.equipment_id}`
			);
		})
		.catch((err) => console.log('Error couldnt create Equipment Relation', err));
};

// :: READ

exports.getAllEquipmentRelations = async () => {
	return await store.findAll().then((relations) => relations).catch((err) => {
		console.log('Error finding Relations', err);
	});
};

exports.getEquipmentRelation = async (store_id, equipment_id) => {
	return await equipment
		.findOne({ where: { store_id: store_id, equipment_id: equipment_id } })
		.then((data) => data.dataValues)
		.catch((err) => console.log('Err Equipment could not be found', err));
};

exports.getEquipmentRelationByDaysLeftMaintainance = async (query) => {
	return await equipment
		.findAll({ where: { day_left_maintenance: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query Equipment Relation', err));
};

exports.getEquipmentRelationByFunctional = async (query) => {
	return await equipment
		.findAll({ where: { functional: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query', err));
};
exports.getEquipmentRelationByMonthsInUse = async (query) => {
	return await equipment
		.findAll({ where: { months_in_use: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query', err));
};

// :: UPDATE

// :: DELETE

exports.deleteEquipmentRelationById = async (store_id, equipment_id) => {
	store
		.findOne({ where: { store_id: store_id, equipment_id: equipment_id } })
		.then((equipment) => {
			console.log(`Store Id:${store.id} removed`);
			equipment.destroy();
		})
		.catch((err) => console.log('Couldnt delete Store ID:' + store.id, err));
};
