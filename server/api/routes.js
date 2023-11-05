const express = require('express')
const router = express.Router()
const api = require('./controllers')

const { query, body } = require('express-validator')

router
  .route('/')
  .get(
    query('limit').isInt().optional(),
    query('offset').isInt().optional(),
    api.index,
  )

router
  .route('/new')
  .post(
    body('name').isString(),
    body('points').isInt(),
    body('feedOption').isInt(),
    api.create,
  )

module.exports = router
