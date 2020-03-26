const Sequelize = require('sequelize');
const db = require('../config/database');
const company = require('./company.js');
const equipment = require('./equipment');
module.exports = db.define('store_equipment', {
	store_id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	equipment_id: {
		type: Sequelize.INTEGER,
		reference: {
			model: equipment,
			key: 'id'
		}
	},
	day_left_maintenance: {
		type: Sequelize.INTEGER,
		default: 0
	},
	functional: {
		type: Sequelize.BOOLEAN,
		default: true
	},
	months_in_use: {
		type: Sequelize.INTEGER,
		default: 0
	},
	allowNull: true
});
