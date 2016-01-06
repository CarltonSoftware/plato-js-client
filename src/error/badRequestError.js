function badRequestError(response) {
    this.name = 'badRequestError';
    this.statusCode = response.status.code;
    this.code = response.entity.errorCode;
    this.message = response.entity.errorDescription;
}
badRequestError.prototype = Error.prototype;

module.exports = badRequestError;
