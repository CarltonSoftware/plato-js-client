var Entity = require('./Entity');

function Unit(id) {
    this.path = 'unit';
    this.id = id;
}
Unit.prototype = new Entity();

module.exports = Unit;