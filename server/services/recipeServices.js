const Recipe = require('../models/Recipe')

async function getAll() {
	const recipes = await Recipe.find({})
	return recipes
}
async function getMyRecipes(ownerId) {
	const recipes = await Recipe.find({ownerId: ownerId})
	return recipes
}

async function getById(id) {
	const recipe = await Recipe.findOne({_id: id})
	return recipe
}

async function createRecipe(data) {
	const recipe = await Recipe.create(data)
	return recipe
}

async function update(id, data) {
	const recipe = await Recipe.findOne({_id: id})
	const updatedRecipe = Object.assign(recipe, data)
	await Recipe.create(updatedRecipe)
	return updatedRecipe
}

async function putLike(id, userId) {
	let updatedRecipe = await Recipe.findByIdAndUpdate({_id: id}, {$push: {likes: userId}})
	return updatedRecipe
}

async function remove(id) {
	await Recipe.findByIdAndDelete(id)
}

module.exports = {
	getAll,
	getById,
	createRecipe,
	update,
	remove,
	putLike,
	getMyRecipes,
}
