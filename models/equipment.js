const Sequelize = require('sequelize');
const db = require('../config/database');
module.exports = db.define('equipment', {
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
	life_span: {
		type: Sequelize.INTEGER,
		allowNull: false
	}
});
