const router = require('express').Router()
const {isAuth} = require('../middlewares/guards')
const {getAll, getById, createRecipe, update, remove, putLike, getMyRecipes} = require('../services/recipeServices')

router.get('', async (req, res) => {
	const recipes = await getAll()
	res.status(200).json(recipes)
})

router.get('/:ownerId/all', async (req, res) => {
	const ownerId = req.params.ownerId
	const recipes = await getMyRecipes(ownerId)
	res.status(200).json(recipes)
})

router.post('', async (req, res) => {
	let data = req.body
	const recipe = await createRecipe(data)
	res.status(201).json(recipe)
})

router.get('/:recipeId', async (req, res) => {
	try {
		const id = req.params.recipeId
		const recipe = await getById(id)
		res.status(200).json(recipe)
	} catch (err) {
		console.error(err.message)
		res.status(404).json({message: 'Not found'})
	}
})

router.put('/:recipeId/like', async (req, res) => {
	try {
		const id = req.params.recipeId
		let userId = req.body
		const recipe = await putLike(id, userId)
		res.status(200).json(recipe)
	} catch (error) {
		return error
	}
})

router.put('/:recipeId', async (req, res) => {
	const data = req.body
	id = req.params.recipeId
	const updatedRecipe = await update(id, data)
	res.status(200).json(updatedRecipe)
})
router.delete('/:recipeId', async (req, res) => {
	await remove({_id: req.params.recipeId})
	res.status(200).json({message: 'Deleted'})
})

module.exports = router
