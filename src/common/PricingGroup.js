var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var PricingGroupYear = require('./PricingGroupYear');
var Joi = require('joi');

function PricingGroup(id) {
  this.path = 'pricinggroup';
  this.createPath = 'pricinggroup';
  this.id = id;
  this.years = new Collection({
    object: PricingGroupYear,
    path: 'year',
    parent: this
  });
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
