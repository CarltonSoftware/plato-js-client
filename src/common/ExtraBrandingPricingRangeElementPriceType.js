var SingleEntity = require('./SingleEntity');

function ExtraBrandingPricingRangeElementPriceType(extraId, brandingId, pricingId, rangeId, id) {
  console.log(extraId, brandingId);
    this.path = 'extra/' + extraId + '/branding/' + brandingId + '/pricing/' + pricingId + '/rangeelement/' + rangeId + '/pricetype';
    this.createPath = this.path;
    this.id = id;
}
ExtraBrandingPricingRangeElementPriceType.prototype = new SingleEntity();

ExtraBrandingPricingRangeElementPriceType.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a ExtraBrandingPricingRangeElementPriceType
    pricetypeid: this.pricetype.id,
    price: this.price,
  };
};

ExtraBrandingPricingRangeElementPriceType.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a ExtraBrandingPricingRangeElementPriceType
    pricetypeid: this.pricetype.id,
    price: this.price,
  };
};

module.exports = ExtraBrandingPricingRangeElementPriceType;
