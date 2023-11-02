if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const { query } = require('./db')

app.use(express.json())

app.get('/', async (req, res) => {
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
})

app.post('/new', async (req, res) => {
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
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
