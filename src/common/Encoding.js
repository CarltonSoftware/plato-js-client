var SingleEntity = require('./SingleEntity');

function Encoding(id) {
    this.path = 'encoding';
    this.createPath = this.path;
    this.id = id;
}
Encoding.prototype = new SingleEntity();

Encoding.prototype.toCreateArray = function() {
    return {
        'encoding': this.encoding
    };
};

Encoding.prototype.toUpdateArray = function() {
    return {
        'id': this.id,
        'encoding': this.encoding
    };
};

module.exports = Encoding;