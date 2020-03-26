//___ Data Base Config Import
const db = require('../config/database');

//___ Model Imports
const equipment = require('../models/equipment');

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
exports.addEquipment = async (name, life_span) => {
	const equipmentObj = {
		name: name,
		life_span: life_span
	};
	equipment
		.create(equipmentObj)
		.then((newEquipment) => {
			console.log(
				`Successfully Created new Equipment`,
				`Equipment ID: ${equipment.id} <----> Equipment Name: ${equipment.name}`
			);
		})
		.catch((err) => console.log('Error couldnt create Equipment', err));
};

// :: READ

exports.getAllEquipment = async () => {
	return await equipment.findAll().then((equipment) => equipment).catch((err) => {
		console.log('Error finding Equipment', err);
	});
};

exports.getEquipmentById = async (query) => {
	return await equipment
		.findOne({ where: { id: query } })
		.then((data) => data.dataValues)
		.catch((err) => console.log('Err Equipment could not be found', err));
};

exports.getEquipmentByName = async (query) => {
	return await equipment
		.findOne({ where: { name: query } })
		.then((data) => data.dataValues)
		.catch((err) => console.log('error in query Equipment', err));
};

exports.getEquipmentByLifeSpan = async (query) => {
	return await equipment
		.findAll({ where: { life_span: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query', err));
};

// :: UPDATE

exports.updateEquipmentLifeSpan = async (equipmentId, value) => {
	this.getEquipmentById(equipmentId).then(async (equipment) => {
		equipment.life_span = value;
		await equipment.save();
	});
};

// :: DELETE

exports.deleteEquipmentById = async (equipmentId) => {
	store
		.findOne({ where: { id: equipment } })
		.then((equipment) => {
			console.log(`Store Id:${store.id} removed`);

			equipment.destroy();
		})
		.catch((err) => console.log('Couldnt delete Store ID:' + store.id, err));
};
