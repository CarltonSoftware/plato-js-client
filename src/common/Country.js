var SingleEntity = require('./SingleEntity');

function Country(id) {
    this.path = 'country';
    this.id = id;
}
Country.prototype = new SingleEntity();

module.exports = Country;
