const { query } = require('../db')

module.exports.index = async (req, res) => {
  try {
    const limit = 20
    const data = await query(
      `SELECT * FROM score ORDER BY points DESC LIMIT $1`,
      [limit],
    )

    const result = data.map((row, i) => ({
      position: i + 1,
      name: row.name,
      points: row.points,
      feedOption: row['feed_option'],
    }))

    res.status(200).send(result)
  } catch {
    res.status(500).send({ status: 500, message: error.message })
    console.error(error)
  }
}

module.exports.create = async (req, res) => {
  try {
    const { name, points, feedOption } = req.body
    await query(
      `INSERT INTO score (name, points, feed_option, dt)
      VALUES ($1, $2, $3, NOW() )`,
      [name, points, feedOption],
    )
    res.status(200).send({ status: 200, message: 'success!' })
  } catch {
    res.status(500).send({ status: 500, message: error.message })
    console.error(error)
  }
}
