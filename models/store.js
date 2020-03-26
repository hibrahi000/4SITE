const Sequelize = require('sequelize');
const db = require('../config/database');
const company = require('./company');
const equipment = require('./equipment');
module.exports = db.define('store', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	location: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	number_of_employees: {
		type: Sequelize.INTEGER,
		default: 0
	},
	company_id: {
		type: Sequelize.INTEGER,
		references: {
			model: company,
			key: 'id'
		},
		allowNull: false
	}
});
