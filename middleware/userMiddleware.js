const userApi = require('../api/users');
const storeApi = require('../api/store');
const companyApi = require('../api/company');
const employeeApi = require('../api/employee');
exports.load_user = (req, res, next) => {
	console.log(req.query);
	let { id } = req.query;

	userApi.getUserById(id).then((user) => {
		req.user = user;
		next();
	});
};
exports.update_user = (req, res, next) => {};

exports.load_stores = (req, res, next) => {
	let user = req.user;
	storeApi.getStoreById(user.store_id).then((store) => {
		req.store = store;
		next();
	});
};

exports.update_stores = (req, res, next) => {};

exports.load_company = (req, res, next) => {
	let store = req.store;
	companyApi.getCompanyById(store.company_id).then((company) => {
		req.company = company;
		next();
	});
};
exports.update_company = (req, res, next) => {};

exports.load_equipment = (req, res, next) => {};
exports.update_equipment = (req, res, next) => {};

exports.test_load = (req, res, next) => {};

exports.load_homePage = (req, res, next) => {
	const { user, store, company } = req;
	console.log(user,'this', store, 'this', company);
	res.send({ user: user, store: store, company: company });
};

exports.loadAllEmployees = (req,res,next) => {
	employeeApi.getAllEmployees().then(data => {
		res.send({row : data});
	})
}