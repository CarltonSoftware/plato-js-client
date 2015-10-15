var Entity = require('./Entity');

Unit.prototype = new Entity();
function Unit(id) {
    this.path = 'unit';
    this.id = id;
}

module.exports = Unit;