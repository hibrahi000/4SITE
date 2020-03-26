const bcrypt = require('bcrypt');

exports.encryptString = async (stringObj, callback) => {
	return await bcrypt.genSalt(10, async (err, salt) => {
		const hash = await bcrypt.hash(stringObj, salt);
		return hash;
	});
};
