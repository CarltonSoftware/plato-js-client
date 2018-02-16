var SingleEntity = require('./SingleEntity');
var PartySizePricing = require('./PartySizePricing');

function ReducedOccupancyPrice(id) {
  this.path = 'reducedoccupancyprice';
  this.createPath = this.path;
  this.id = id;
  this.partysizepricing = new PartySizePricing();
}

ReducedOccupancyPrice.prototype = new SingleEntity();

ReducedOccupancyPrice.prototype.toArray = function() {
  return {
    partysizepricingid: this.partysizepricing.id,
    partysizepricetype: this.partysizepricetype,
    price: this.price,
    useasbase: this.useasbase,
    copytoallbrands: this.copytoallbrands,
  };
};

module.exports = ReducedOccupancyPrice;
