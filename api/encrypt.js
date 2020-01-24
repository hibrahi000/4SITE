const bcrypt = require('bcrypt');

exports.encryptString = async (stringObj) => {
	bcrypt
		.genSalt(10, (err, salt) =>
			bcrypt.hash(stringObj, salt).then((err, hash) => {
				err ? console.log(err) : hash;
			})
		)
		.catch((err) => console.log(err));
};
