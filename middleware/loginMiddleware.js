const passport = require('passport');
const {authenticateUser,serialize, isAuthenticated} = require('../api/authenticate');

exports.validateUser = (req, res, next) => {
	// let {username, password} = req.body;
	// authenticateUser(username,password).then(response => {
	// 	// if(response.authenticated){
	// 	// 	serialize(req,res,next);
	// 	// }
	// 	res.send({response : response});
	// })

	res.send({response: req});
};

exports.authenticateUser = (req,res,next) => {
	isAuthenticated(req,res,next);
}

exports.test_load = (req, res, next) => {
	res.send({ test: 'this is a test' });
};
