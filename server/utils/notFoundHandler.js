module.exports = function notFoundHandler(req, res, next) {
  const { originalUrl } = req
  res.status(404).send({
    status: 404,
    message: `Not Found`,
    path: originalUrl,
  })
}
