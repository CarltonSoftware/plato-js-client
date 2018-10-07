var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PricingGroup(id) {
  this.path = 'pricinggroup';
  this.createPath = 'pricinggroup';
  this.id = id;
}

PricingGroup.prototype = new SingleEntity();
PricingGroup.prototype.toArray = function() {
  return {
    pricinggroup: this.pricinggroup,
    description: this.description,
  };
};
PricingGroup.prototype.validSchema = function() {
  return {
    pricinggroup: Joi.string().label('pricing group'),
    description: Joi.string().label('description'),
  };
};


module.exports = PricingGroup;
