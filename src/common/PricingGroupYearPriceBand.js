var SingleEntity = require('./SingleEntity');
var PriceBand = require('./PriceBand');
var Joi = require('joi');

function PricingGroupYearPriceBand(id) {
  this.path = 'priceband';
  this.createPath = 'priceband';
  this.id = id;
  this.priceband = new PriceBand();
}

PricingGroupYearPriceBand.prototype = new SingleEntity();
PricingGroupYearPriceBand.prototype.toArray = function() {
  var fields = {
    pricebandid: this.priceband.id,
    amount1: this.amount1,
    percentage: this.percentage,
    amount2: this.amount2,
  };

  if (this.updatepropertypricing) {
    fields.updatepropertypricing = this.updatepropertypricing;
  }

  if (this.updateagreedpropertypricing) {
    fields.updateagreedpropertypricing = this.updateagreedpropertypricing;
  }

  return fields;
};
PricingGroupYearPriceBand.prototype.validSchema = function() {
  return {
    priceband: Joi.object().required().label('price band'),
    amount1: Joi.number().empty('').label('amount to add before adding percentage (optional)'),
    percentage: Joi.number().empty('').label('percentage to add (optional)'),
    amount2: Joi.number().empty('').label('amount to add after adding percentage (optional)'),
    updatepropertypricing: Joi.boolean().optional().label('existing property pricing for the year should be updated'),
    updateagreedpropertypricing: Joi.boolean().optional().label('agreed pricing should be updated'),
  };
};

module.exports = PricingGroupYearPriceBand;
