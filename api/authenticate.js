const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userApi = require('./users');

exports.authenticateUser = async (username, password) => {
	return { response: "USer", authenticated: true };
	// userApi.getEmployeeByUserName(username).then((user) => {
	// 	bcrypt.compare(password, user.password).then((err, match) => {
	// 		if (match) {
	// 			return { response: user, authenticated: true };
	// 		} else {
	// 			return { response: err, authenticated: false };
	// 		}
	// 	});
	// });
};

exports.serialize = (req, res, next) => {
	req.sessions.authenticated = true;
};

exports.logout = (req, res, next) => {

};

exports.isAuthenticated = (req,res,next) => {
	if(req.sessions.authenticated !== true){
		res.redirect('/');
	}
};


