const { query } = require('../db')

module.exports.index = async (req, res) => {
  try {
    const limit = 20
    const data = await query(
      `SELECT * FROM score ORDER BY points DESC LIMIT $1`,
      [limit],
    )
    res.status(200).send(data)
  } catch {
    res.status(500).send({ status: 500, message: error.message })
    console.error(error)
  }
}

module.exports.create = async (req, res) => {
  try {
    const { name, points } = req.body
    await query(
      `INSERT INTO score (name, points, dt) VALUES ($1, $2, NOW() )`,
      [name, points],
    )
    res.status(200).send({ status: 200, message: 'success!' })
  } catch {
    res.status(500).send({ status: 500, message: error.message })
    console.error(error)
  }
}
