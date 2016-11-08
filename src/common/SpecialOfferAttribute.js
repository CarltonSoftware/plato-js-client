var SingleEntity = require('./SingleEntity');
var Attribute = require('./Attribute');

function SpecialOfferAttribute(id) {
  this.path = this.createPath = 'attribute';
  this.id = id;
  this.attribute = new Attribute();
}

SpecialOfferAttribute.prototype = new SingleEntity();
SpecialOfferAttribute.prototype.toArray = function() {
  return {
    attributeid: this.attribute.id,
    value: this.value,
    type: this.attribute.type
  };
};

module.exports = SpecialOfferAttribute;
