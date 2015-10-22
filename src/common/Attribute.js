var SingleEntity = require('./SingleEntity');
var AttributeGroup = require('./AttributeGroup');

function Attribute(id) {
    this.path = 'attribute';
    this.id = id;
    this.group = new AttributeGroup();
}
Attribute.prototype = new SingleEntity();

module.exports = Attribute;