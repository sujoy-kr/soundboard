const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('inside sound api')
})

module.exports = router
