const Sequelize = require('sequelize');
const db = require('../config/database');
const company = require('./company.js');
const store = require('./store.js');
module.exports = db.define('employee', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	first_name: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	last_name: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	user_name: {
		type: Sequelize.STRING(50),
		unique: true,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING(255),
		unique: true,
		allowNull: false
	},
	company_id: {
		type: Sequelize.INTEGER,
		references: {
			model: company,
			key: 'id'
		}
	},
	store_id: {
		type: Sequelize.INTEGER,
		references: {
			model: store,
			key: 'id'
		}
	}
});
