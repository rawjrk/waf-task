if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const sanitizer = require('perfect-express-sanitizer')
const limiter = require('express-rate-limit')
const helmet = require('helmet')
const path = require('node:path')
const PORT = process.env.PORT || 5000

const apiRoutes = require('./api/routes')
const notFoundHandler = require('./utils/notFoundHandler')
const errorHandler = require('./utils/errorHandler')

const limits = limiter({
  windowMs: 60 * 1000,
  max: 10,
  message: {
    status: 429,
    message: 'Too Many Requests: Wait for 1 minute',
  },
})

app.use(
  sanitizer.clean({
    xss: true,
    sql: true,
    sqlLevel: 4,
    /* sqlLevel 5 does NOT allow " (quotation mark)
       which is neccessary for json body */
  }),
)

app.use(limits)
app.use(helmet())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/dist')))

app.use('/api', apiRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname), '../client/dist/index.html')
})

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
