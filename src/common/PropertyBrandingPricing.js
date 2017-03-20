var SingleEntity = require('./SingleEntity');

/**
 * Property branding pricing
 *
 * @param {number} id
 */
function PropertyBrandingPricing() {
  this.path = 'pricing';
  this.createPath = this.path;
  this.id = null;
}

PropertyBrandingPricing.prototype = new SingleEntity();
PropertyBrandingPricing.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    daysofweek: this.daysofweek,
    adddays: this.adddays
  };
};

module.exports = PropertyBrandingPricing;
