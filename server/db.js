const pgp = require('pg-promise')()

const db = pgp(process.env.POSTGRES_URI)

module.exports = {
  query: (text, values) => db.query(text, values),
}
