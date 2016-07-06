var SingleEntity = require('./SingleEntity');
var PartySizePricing = require('./PartySizePricing');

function PartySizePrice(id) {
  this.path = 'partysizeprice';
  this.createPath = this.path;
  this.id = id;
  this.partysizepricing = new PartySizePricing();
}
PartySizePrice.prototype = new SingleEntity();
PartySizePrice.prototype.toArray = function() {
  return {
    partysizepricingid: this.partysizepricing.id,
    price: this.price
  };
};

module.exports = PartySizePrice;
