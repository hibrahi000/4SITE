const db = require('../config/database');
const company = require('../models/company');
const store = require('../models/store');
exports.testDB = () => {
	db
		.authenticate()
		.then(function(err) {
			console.log('Connection has been established successfully.');

			// campus.findAll().then((data) => console.log(data,'this is printing'));
		})
		.catch(function(err) {
			console.log('Unable to connect to the database:', err);
		});
};

// this.testDB();
// :: CREATE
exports.addCompany = async (name) => {
	const companyObj = {
		name: name
	};
	company.create(companyObj).then((newCompany) => {
		console.log(`Successfully Created new Company`, `Company ID: ${newCompany.id}`);
	});
};

// :: READ
exports.getAllCompanies = async () => {
	return await company.findAll().then((data) => {
		// console.log(data);
		return data;
	});
};
exports.getCompanyById = async (query) => {
	console.log(query);
	return await company
		.findOne({ where: { id: query } })
		.then((data) => data.dataValues)
		.catch((err) => console.log('error in query'));
};
exports.getCompanyByName = async (query) => {
	return await company
		.findAll({ where: { name: query } })
		.then((data) => data)
		.catch((err) => console.log('error in query'));
};

// :: UPDATE
exports.changeCompanyName = async (companyId, name) => {
	this.getCompanyById(companyId).then(async (company) => {
		company.name = name;
		await company.save();
	});
};

// :: DELETE
exports.deleteCompany = async (query) => {
	company
		.findOne({ where: { id: query } })
		.then((company) => {
			let companyId = company.id;
			store
				.findAll({ where: { company_id: companyId } })
				.then((storeList) => {
					storeList.forEach((store) => {
						store.destroy();
					});
					company.destroy();
				})
				.catch((err) => {
					console.log(
						'ERROR:: Company and Stores associated could not be removed |REASON| Store List Could Not Be Found',
						err
					);
				});
		})
		.catch((err) => {
			console.log(
				'ERROR:: Company and Stores associated could not be removed |REASON| Company Could Not Be Found',
				err
			);
		});
};
