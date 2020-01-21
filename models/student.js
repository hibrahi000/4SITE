const Sequelize = require('sequelize');
const db = require('../config/database');
const campus = require('./campus');
module.exports = db.define('student', {
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
	gender: {
		type: Sequelize.STRING(50)
	},
	email: {
		type: Sequelize.STRING(50)
	},
	date_of_birth: {
		type: Sequelize.DATE
	},

	campus_id: {
		type: Sequelize.INTEGER,
		references: {
			model: campus,
			key: 'id'
        }
        // ^^ the reference attribute is to reference the table imported above as campus
	}
});
