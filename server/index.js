if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const apiRoutes = require('./api/routes')

app.use(express.json())

app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
