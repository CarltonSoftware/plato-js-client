var SingleEntity = require('./SingleEntity');
var Attribute = require('./Attribute');

function PropertyAttribute(propertyId, id) {
    this.path = propertyId + '/attribute/' + id;
    this.createPath = this.path;
    this.id = id;
    this.attribute = new Attribute();
}
PropertyAttribute.prototype = new SingleEntity();

PropertyAttribute.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PropertyAttribute
    attribute: this.attribute,
    value: this.value,
  };
};

PropertyAttribute.prototype.toUpdateArray = function() {
  return {
    attributeid: this.attribute.id,
    value: this.value,
    unit: 'metre' //TODO: change me to work
  };
};

module.exports = PropertyAttribute;
