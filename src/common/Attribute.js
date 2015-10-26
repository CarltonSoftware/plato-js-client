var SingleEntity = require('./SingleEntity');
var AttributeGroup = require('./AttributeGroup');
var Unit = require('./Unit');

function Attribute(id) {
    this.path = 'attribute';
    this.id = id;
    this.group = new AttributeGroup();
    this.unit = new Unit();
}
Attribute.prototype = new SingleEntity();

module.exports = Attribute;