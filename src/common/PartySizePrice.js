var SingleEntity = require('./SingleEntity');
var PartySizePricing = require('./PartySizePricing');
var PartySizePriceType = require('./PartySizePriceType');

function PartySizePrice(id) {
  this.path = 'partysizeprice';
  this.createPath = this.path;
  this.id = id;
  this.partysizepricing = new PartySizePricing();
  this.partysizepricetype = new PartySizePriceType();
}
PartySizePrice.prototype = new SingleEntity();
PartySizePrice.prototype.toArray = function() {
  return {
    partysizepricingid: this.partysizepricing.id,
    price: this.price,
    partysizepricetype: this.partysizepricetype,
    useasbase: this.useasbase
  };
};

module.exports = PartySizePrice;
