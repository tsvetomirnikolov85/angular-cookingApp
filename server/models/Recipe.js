const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
	title: {type: String},
	imageUrl: {type: String},
	products: {type: Array},
	description: {type: Array},
	ownerId: {type: String},
	ownerImg: {type: String},
	ownerName: {type: String},
	likes: {type: Array},
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe
