var SingleEntity = require('./SingleEntity');
var Attribute = require('./Attribute');

function PropertyAttribute(propertyId, id) {
    this.propertyId = propertyId;
    this.path = 'property/' + this.propertyId + '/attribute';
    this.createPath = this.path;
    this.id = id;
    this.attribute = new Attribute();
}
PropertyAttribute.prototype = new SingleEntity();

PropertyAttribute.prototype.toArray = function() {
  return {
    attributeid: this.attribute.id,
    value: this.value,
    unit: this.attribute.unit.name,
    optionid: this.optionid,
    comments: this.comments
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
