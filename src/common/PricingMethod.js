var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PricingMethod(id) {
  this.path = 'pricingmethod';
  this.createPath = 'pricingmethod';
  this.id = id;

  this.validSchema = function() {
    return {
      pricingmethod: Joi.string().required().label('Pricing method'),
      description: Joi.string().required().label('Description')
    }
  };
}
PricingMethod.prototype = new SingleEntity();

PricingMethod.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a PricingMethod
    pricingmethod: this.pricingmethod,
    description: this.description,
  };
};

module.exports = PricingMethod;
