var SingleEntity = require('./SingleEntity');

function PriceOverride(priceTypeId, brandingId, id) {
    this.createPath = 'pricetype';
    this.id = id;
}
PriceOverride.prototype = new SingleEntity();

PriceOverride.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PriceType
    currency: this.currency.code,
    fromdate: this.fromdate,
    todate: this.todate,
    partysizefrom: 0,
    partysizeto: 999,
    price: 251,
    type: 'Override'
  };
};

PriceOverride.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a PriceType
    pricetype: this.pricetype,
    pricingperiod: this.pricingperiod,
    description: this.description,
    periods: this.periods,
    additional: this.additional,
  };
};

module.exports = PriceOverride;
