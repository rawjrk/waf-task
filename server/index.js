if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const path = require('node:path')
const PORT = process.env.PORT || 5000

const apiRoutes = require('./api/routes')

app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../client/dist')))

app.use('/api', apiRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname), '../client/dist/index.html')
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
