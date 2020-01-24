const Sequelize = require('sequelize');
const db = require('../config/database');
module.exports = db.define('company_data', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	number_of_stores: {
		type: Sequelize.INTEGER,
		default : 0
	}
});
