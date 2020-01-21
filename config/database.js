const Sequelize = require('sequelize');
const {postgresPass, postgresUsername} = process.env;
var opts = {
	define: {
		timestamps: false,
		paranoid: true,
		freezeTableName: true
	}
};

module.exports = new Sequelize(`postgres://${postgresUsername}:${postgresPass}@localhost:5432/postgres`, opts);
