var SingleEntity = require('./SingleEntity');
var Attribute = require('./Attribute');

function PropertyAttribute(propertyId, id) {
    this.path = 'property/' + propertyId + '/attribute';
    this.createPath = this.path;
    this.id = id;
    this.attribute = new Attribute();
}
PropertyAttribute.prototype = new SingleEntity();

PropertyAttribute.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PropertyAttribute
    attributeid: this.attribute.id,
    value: this.value,
  };
};

PropertyAttribute.prototype.toUpdateArray = function() {
  return {
    attributeid: this.attribute.id,
    value: this.value,
    unit: this.attribute.unit.name
  };
};

PropertyAttribute.prototype.toString = function() {
  switch (this.attribute.type) {
    case 'Boolean':
      return this.value ? 'yes' : 'no';
    case 'Hybrid':
      return (this.value.boolean ? 'yes' : 'no') + ', ' + this.value.number + this.attribute.unit.name;
    case 'Number':
      return this.value + this.attribute.unit.name;
  }
  return this.value.toString();
};

module.exports = PropertyAttribute;
