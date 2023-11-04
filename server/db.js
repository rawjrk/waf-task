const pgp = require('pg-promise')()

const username = process.env.POSTGRES_USER
const password = process.env.POSTGRES_PASSWORD
const host = process.env.POSTGRES_HOST
const port = process.env.POSTGRES_PORT

const db = pgp(
  `postgress://${username}:${password}@${host}:${port}/snaken?ssl=true`,
)

module.exports = {
  query: (text, values) => db.query(text, values),
}
