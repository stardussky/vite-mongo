const express = require('express')
const router = express.Router()
const { example } = require('@/controllers/example')
const use = require('@/utils/use')

router.get('/', use(example))

router.get('/*', (req, res) => {
    res.send('router not found')
})

module.exports = router
