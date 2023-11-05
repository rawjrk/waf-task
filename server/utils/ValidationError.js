module.exports = class ValidationError extends Error {
  constructor(errors) {
    super('Validation Error')
    this.list = [...errors].map(
      (err) =>
        `${err.msg} '${err.value}' for ${err.type} '${err.path}' in ${err.location}`,
    )
  }
}
