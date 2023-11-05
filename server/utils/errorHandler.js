const ValidationError = require('./ValidationError')

module.exports = function errorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    res.status(403).send({
      status: 403,
      message: 'Forbidden',
      errors: err.list,
    })
  } else {
    console.error(err)
    res.status(500).send({
      status: 500,
      message: 'Internal Server Error',
    })
  }
}
