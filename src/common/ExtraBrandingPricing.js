var SingleEntity = require('./SingleEntity');

function ExtraBrandingPricing(extraId, brandingId, id) {
    this.path = 'extra/' + extraId + '/branding/' + brandingId + '/pricing';
    this.createPath = this.path;
    this.id = id;
}
ExtraBrandingPricing.prototype = new SingleEntity();

ExtraBrandingPricing.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a ExtraBrandingPricing
    pricingperiod: this.pricingperiod,
    propertypricing: this.propertypricing,
    fromdate: this.fromdate,
    todate: this.todate,
    currency: this.currency,
    pricingtype: this.pricingtype,
    perperiod: this.perperiod,
    basedon: this.basedon,
    ranges: this.ranges,
  };
};

ExtraBrandingPricing.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a ExtraBrandingPricing
    pricingperiod: this.pricingperiod,
    propertypricing: this.propertypricing,
    fromdate: this.fromdate,
    todate: this.todate,
    currency: this.currency,
    pricingtype: this.pricingtype,
    perperiod: this.perperiod,
    basedon: this.basedon,
    ranges: this.ranges,
  };
};

module.exports = ExtraBrandingPricing;
