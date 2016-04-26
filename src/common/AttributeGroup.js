var SingleEntity = require('./SingleEntity');

function AttributeGroup(id) {
  this.path = 'attributegroup';
  this.createPath = 'attributegroup';
  this.id = id;
}
AttributeGroup.prototype = new SingleEntity();

AttributeGroup.prototype.toUpdateArray = function() {
  return {
    name: this.name
  };
};

AttributeGroup.prototype.toArray = function() {
  return {
    name: this.name
  };
};

module.exports = AttributeGroup;
