function statusError(response) {
    this.name = 'statusError';
    this.message = 'Entity not found';
    this.statusCode = response.status.code;
}
statusError.prototype = Error.prototype;

module.exports = statusError;