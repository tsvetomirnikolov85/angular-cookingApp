const router = require('express').Router()
const {register, login, logout, getUserById} = require('../services/usersService')

router.post('/register', async (req, res) => {
	try {
		const result = await register(req.body.username?.trim().toLowerCase(), req.body.imageUrl?.trim().toLowerCase(), req.body.password?.trim().toLowerCase())
		res.status(201).json(result)
	} catch (err) {
		console.error(err.message)
		res.status(400).json({message: err.message})
	}
})

router.post('/login', async (req, res) => {
	try {
		const result = await login(req.body.username.trim().toLowerCase(), req.body.password.trim())
		res.json(result)
	} catch (err) {
		console.error(err.message)
		res.status(400).json({message: err.message})
	}
})

router.get('/logout', (req, res) => {
	logout(req.user?.token)
	res.status(204).end()
})

router.get('/profile/:id', async (req, res) => {
	try {
		const id = req.params.id
		const user = await getUserById(id)
		return res.status(200).json(user)
	} catch (error) {
		return res.status(404).json({message: 'Not found'})
	}
})

module.exports = router
