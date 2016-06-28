var SingleEntity = require('./SingleEntity');

function PartySizePricing(id) {
  this.path = 'partysizepricing';
  this.createPath = this.path;
  this.id = id;
}
PartySizePricing.prototype = new SingleEntity();
PartySizePricing.prototype.toArray = function() {
  return {
    description: this.description,
    partysizefrom: this.partysizefrom,
    partysizeto: this.partysizeto
  };
};

module.exports = PartySizePricing;
