const {Schema, model} = require('mongoose')

const userSchema = new Schema({
	username: {type: String},
	imageUrl: {type: String},
	hashedPassword: {type: String},
})

const User = model('User', userSchema)

module.exports = User
