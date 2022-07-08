const router = require('express').Router()

router.use('/user', require('./user'))
router.use('/sound', require('./sound'))

module.exports = router
