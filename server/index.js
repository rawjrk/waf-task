if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const { query } = require('./db')

app.use(express.json())

app.get('/', async (req, res) => {
  query(
    `SELECT * FROM score
    ORDER BY points DESC
    LIMIT 20`,
  )
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((error) => {
      res.status(500).send({ status: 500, message: error.message })
      console.error(error)
    })
})

app.post('/new', (req, res) => {
  const { name, points } = req.body

  query(
    `INSERT INTO score (name, points, dt)
    VALUES ($1, $2, NOW() )`,
    [name, points],
  )
    .then((data) => {
      res.status(200).send({ status: 200, message: 'success!' })
    })
    .catch((error) => {
      res.status(500).send({ status: 500, message: error.message })
      console.error(error)
    })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
