function discriminatorError(response) {
    this.name = 'discriminatorError';
    this.message = 'Discriminator type not found';
    this.object = response;
}
discriminatorError.prototype = Error.prototype;

module.exports = discriminatorError;