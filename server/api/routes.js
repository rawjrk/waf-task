const express = require('express')
const router = express.Router()
const api = require('./controllers')

router.route('/').get(api.index)
router.route('/new').post(api.create)

module.exports = router
