var SingleEntity = require('./SingleEntity');

function PricingPeriod(id) {
    this.path = 'pricingperiod';
    this.createPath = 'pricingperiod';
    this.id = id;
}
PricingPeriod.prototype = new SingleEntity();

PricingPeriod.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PricingPeriod
    pricingperiod: this.pricingperiod,
    days: this.days,
    weeks: this.weeks,
    months: this.months,
    subperiod: this.subperiod,
  };
};

PricingPeriod.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a PricingPeriod
    pricingperiod: this.pricingperiod,
    days: this.days,
    weeks: this.weeks,
    months: this.months,
    subperiod: this.subperiod,
  };
};

module.exports = PricingPeriod;
