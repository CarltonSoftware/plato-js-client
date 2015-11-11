var SingleEntity = require('./SingleEntity');
var AttributeGroup = require('./AttributeGroup');
var Collection = require('./StaticCollection');
var Option = require('./AttributeOption');
var Unit = require('./Unit');

function Attribute(id) {
    this.path = 'attribute';
    this.id = id;
    this.group = new AttributeGroup();
    this.unit = new Unit();
    this.options = new Collection({ object: Option }); 
}
Attribute.prototype = new SingleEntity();

module.exports = Attribute;