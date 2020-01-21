const Sequelize = require('sequelize');
const db = require('../config/database');
module.exports = db.define('campus', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	university: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	location: {
		type: Sequelize.STRING(50),
		allowNull: false
	},
	number_of_students: {
		type: Sequelize.INTEGER
	}
});
