var SingleEntity = require('./SingleEntity');

/**
 * Pricetype object
 *
 * @param {number} id
 */
function PriceType(id) {
  this.path = 'pricetype';
  this.createPath = 'pricetype';
  this.id = id;
}

PriceType.prototype = new SingleEntity();
PriceType.prototype.toArray = function() {
  return {
    pricetype: this.pricetype,
    pricingperiod: this.pricingperiod,
    description: this.description,
    periods: this.periods,
    additional: this.additional
  };
};

module.exports = PriceType;
