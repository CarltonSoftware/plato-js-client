var SingleEntity = require('./SingleEntity');

function PriceType(id) {
    this.path = 'pricetype';
    this.createPath = 'pricetype';
    this.id = id;
}
PriceType.prototype = new SingleEntity();

PriceType.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PriceType
    pricetype: this.pricetype,
    pricingperiod: this.pricingperiod,
    description: this.description,
    periods: this.periods,
    additional: this.additional,
  };
};

PriceType.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a PriceType
    pricetype: this.pricetype,
    pricingperiod: this.pricingperiod,
    description: this.description,
    periods: this.periods,
    additional: this.additional,
  };
};

module.exports = PriceType;
