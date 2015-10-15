function pathNotSpecified(message) {
    this.name = 'pathNotSpecified';
    this.message = (message || '');
}
pathNotSpecified.prototype = Error.prototype;

module.exports = pathNotSpecified;