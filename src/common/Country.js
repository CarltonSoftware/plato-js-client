var SingleEntity = require('./SingleEntity');
var Collection = require('./StaticCollection');

function Country(id) {
    this.path = 'country';
    this.id = id;
}
Country.prototype = new SingleEntity();

module.exports = Country;
