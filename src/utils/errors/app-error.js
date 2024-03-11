class appError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.explianation = message;
    this.statusCode = statusCode;
  }
}
module.exports = appError;
