var SingleEntity = require('./SingleEntity');

function PartySizePriceType(id) {
  this.path = 'partysizepricetype';
  this.createPath = this.path;
  this.id = id;
}
PartySizePriceType.prototype = new SingleEntity();
PartySizePriceType.prototype.toArray = function() {
  return {
    partysizepricetype: this.partysizepricetype
  };
};

module.exports = PartySizePriceType;
