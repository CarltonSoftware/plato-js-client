var SingleEntity = require('./SingleEntity');

function AttributeGroup(id) {
    this.path = 'attributegroup';
    this.id = id;
}
AttributeGroup.prototype = new SingleEntity();

module.exports = AttributeGroup;