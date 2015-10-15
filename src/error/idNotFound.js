function idNotFoundError(message) {
    this.name = 'idNotFoundError';
    this.message = (message || '');
}
idNotFoundError.prototype = Error.prototype;

module.exports = idNotFoundError;