const router = require('express').Router()
const soundController = require('../../controllers/soundController')
const multerMiddleware = require('../../middlewares/multerMiddleware')

router.get('/', soundController.getAllSounds)

router.post('/', multerMiddleware.single('file'), soundController.addSound)

module.exports = router
