const mongoose = require('mongoose')

const LoguserSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	},
	{ collection: 'Loguser' }
)

const model = mongoose.model('LoguserSchema', LoguserSchema)

module.exports = model