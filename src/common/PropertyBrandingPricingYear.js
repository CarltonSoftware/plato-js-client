var SingleEntity = require('./SingleEntity');
var PricingGroupYear = require('./PricingGroupYear');

/**
 * Property branding pricing year
 *
 * @param {number} id
 */
function PropertyBrandingPricingYear(id) {
  this.path = 'pricingyear';
  this.createPath = this.path;
  this.id = id;
  this.pricinggroupyear = new PricingGroupYear();
}

PropertyBrandingPricingYear.prototype = new SingleEntity();
PropertyBrandingPricingYear.prototype.toArray = function() {
  return {
    pricingyear: this.pricingyear,
    pricinggroupyearid: this.pricinggroupyear.id,
    pricingagreed: this.pricingagreed,
  };
};

module.exports = PropertyBrandingPricingYear;
