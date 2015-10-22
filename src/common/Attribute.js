var Entity = require('./Entity');

function Attribute(id) {
    this.path = 'attribute';
    this.id = id;
}
Attribute.prototype = new Entity();

module.exports = Attribute;