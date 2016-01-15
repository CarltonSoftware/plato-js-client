var SingleEntity = require('./SingleEntity');

function PricingMethod(id) {
    this.path = 'pricingmethod';
    this.createPath = 'pricingmethod';
    this.id = id;
}
PricingMethod.prototype = new SingleEntity();

PricingMethod.prototype.toCreateArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PricingMethod
    pricingmethod: this.pricingmethod,
    description: this.description,
  };
};

PricingMethod.prototype.toUpdateArray = function() {
  return {
    //TODO: Add in the fields necessary to update a PricingMethod
    pricingmethod: this.pricingmethod,
    description: this.description,
  };
};

module.exports = PricingMethod;
