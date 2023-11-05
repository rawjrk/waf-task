const { query } = require('../db')
const errorHandler = require('../utils/errorHandler')
const ValidationError = require('../utils/ValidationError')
const { validationResult } = require('express-validator')

module.exports.index = async (req, res, next) => {
  try {
    const result = validationResult(req)
    if (result.errors.length) {
      throw new ValidationError(result.errors)
    }

    const { limit = 5, offset = 0 } = req.query

    const queryResult = await query(
      `SELECT * FROM score ORDER BY points
      DESC LIMIT $1 OFFSET $2`,
      [limit, offset],
    )

    const data = queryResult.map((row, i) => ({
      position: i + 1 + parseInt(offset),
      name: row.name,
      points: row.points,
      feedOption: row['feed_option'],
    }))

    res.status(200).send({
      status: 200,
      message: 'success',
      data,
    })
  } catch (err) {
    errorHandler(err, req, res, next)
  }
}

module.exports.create = async (req, res, next) => {
  try {
    const result = validationResult(req)
    if (result.errors.length) {
      throw new ValidationError(result.errors)
    }

    const { name, points, feedOption } = req.body
    await query(
      `INSERT INTO score (name, points, feed_option, dt)
      VALUES ($1, $2, $3, NOW() )`,
      [name, points, feedOption],
    )

    res.status(200).send({
      status: 200,
      message: 'success',
    })
  } catch (err) {
    errorHandler(err, req, res, next)
  }
}
