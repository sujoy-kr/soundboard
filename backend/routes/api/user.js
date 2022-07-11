const router = require('express').Router()
const passport = require('passport')
const userController = require('../../controllers/userController')

router.get('/', userController.getAllUsers)

// for signup
router.post(
    '/',
    passport.authenticate('signup', { session: false }),
    userController.createUser
)

// for login
router.post(
    '/login',
    passport.authenticate('login', { session: false }),
    userController.loginUser
)

module.exports = router
