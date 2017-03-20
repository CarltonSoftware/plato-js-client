var SingleEntity = require('./SingleEntity');

function ExtraBrandingPricingRangeElementPriceType(extraId, brandingId, pricingId, rangeId, id) {
    this.path = 'extra/' + extraId + '/branding/' + brandingId + '/pricing/' + pricingId + '/rangeelement/' + rangeId + '/pricetype';
    this.createPath = this.path;
    this.id = id;
}
ExtraBrandingPricingRangeElementPriceType.prototype = new SingleEntity();

ExtraBrandingPricingRangeElementPriceType.prototype.toCreateArray = function() {
  return {
    pricetypeid: this.pricetype.id,
    price: this.price,
  };
};

ExtraBrandingPricingRangeElementPriceType.prototype.toUpdateArray = function() {
  return {
    pricetypeid: this.pricetype.id,
    price: this.price,
  };
};

module.exports = ExtraBrandingPricingRangeElementPriceType;
