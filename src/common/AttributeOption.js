var SingleEntity = require('./SingleEntity');

function AttributeOption(attributeId, id) {
    this.id = id;
    this.attributeId = attributeId;
    this.path = 'attribute/' + this.attributeId + '/option';
    this.createPath = this.path;
}
AttributeOption.prototype = new SingleEntity();
AttributeOption.prototype.toArray = function() {
  return {
    id: this.id,
    optionname: this.option,
    optionorder: this.optionorder
  }
};

module.exports = AttributeOption;
