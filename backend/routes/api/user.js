const router = require('express').Router()
// const auth = require('../auth')

router.get('/', (req, res) => {
    res.send('inside users api')
})

module.exports = router
