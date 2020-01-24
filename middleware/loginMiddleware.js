const bcrypt = require('bcrypt');
const userApi = require('../api/users');

exports.authenticateUser = (req, res, next) => {
	isAuthenticated(req, res, next);
};

exports.test_load = (req, res, next) => {
	res.send({ test: 'this is a test' });
};

const serialize = (req, res, next) => {
	req.sessions.authenticated = true;
	console.log(req.sessions.authenticated);
};

exports.logout = (req, res, next) => {};

exports.isAuthenticated = (req, res, next) => {
	if (req.sessions.authenticated !== true) {
		res.redirect('/');
	}
};

exports.validateUser = (req, res, next) => {
	let { username, password } = req.query;
	console.log(username, password);
	userApi
		.getUserByUserName(username)
		.then((user) => {
			// console.log(user);
			bcrypt
				.compare(password, user.dataValues.password, (err, match) => {
					// console.log('this is match');
					if (match) {
						res.send({ response: user, authenticated: true });
						// req.sessions.authenticated = true;
						// console.log(req.sessions.authenticated);
					} else {
						res.send({ response: err, authenticated: false });
					}
				})
		})
		.catch((err) => {
			console.log(err);
		});
};
