const router = require('express').Router()
const soundController = require('../../controllers/soundController')
const multerMiddleware = require('../../middlewares/multerMiddleware')
const extractToken = require('../../middlewares/extractToken')
const auth = require('../auth')

router.get('/', auth.required, extractToken, soundController.getAllSounds)

router.post(
    '/',
    auth.required,
    extractToken,
    multerMiddleware,
    soundController.addSound
)

module.exports = router
