var SingleEntity = require('./SingleEntity');
var PartySizePricing = require('./PartySizePricing');

function PropertyBrandingYearPriceBandReducedOccupancyPrice(id) {
  this.path = 'reducedoccupancyprice';
  this.createPath = this.path;
  this.id = id;
  this.partysizepricing = new PartySizePricing();
}

PropertyBrandingYearPriceBandReducedOccupancyPrice.prototype = new SingleEntity();
PropertyBrandingYearPriceBandReducedOccupancyPrice.prototype.getCreatePath = function() {
    return ['propertybrandingyearpriceband', this.parent.id, this.path].join('/');
  };
PropertyBrandingYearPriceBandReducedOccupancyPrice.prototype.getUpdatePath = function() {
  return ['propertybrandingyearpriceband', this.parent.id, this.path, this.id].join('/');
};

PropertyBrandingYearPriceBandReducedOccupancyPrice.prototype.toArray = function() {
  return {
    partysizepricingid: this.partysizepricing.id,
    partysizepricetype: this.partysizepricetype,
    price: this.price,
    useasbase: this.useasbase,
    copytoallbrands: this.copytoallbrands,
  };
};

module.exports = PropertyBrandingYearPriceBandReducedOccupancyPrice;
