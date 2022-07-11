const router = require('express').Router()
const soundController = require('../../controllers/soundController')
const multerMiddleware = require('../../middlewares/multerMiddleware')

router.get('/', soundController.getAllSounds)

router.post('/', multerMiddleware, soundController.addSound)

module.exports = router
