var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var PricingGroupYearPriceBand = require('./PricingGroupYearPriceBand');
var Joi = require('joi');

function PricingGroupYear(id) {
  this.path = 'year';
  this.createPath = 'year';
  this.id = id;
  this.pricebands = new Collection({
    object: PricingGroupYearPriceBand,
    path: 'priceband',
    parent: this
  });
}

PricingGroupYear.prototype = new SingleEntity();
PricingGroupYear.prototype.toArray = function() {
  var fields = {
    year: this.year,
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
PricingGroupYear.prototype.validSchema = function() {
  return {
    year: Joi.number().integer().label('year'),
    amount1: Joi.number().empty('').label('amount to add before adding percentage (optional)'),
    percentage: Joi.number().empty('').label('percentage to add (optional)'),
    amount2: Joi.number().empty('').label('amount to add after adding percentage (optional)'),
    updatepropertypricing: Joi.boolean().optional().label('existing property pricing for the year should be updated'),
    updateagreedpropertypricing: Joi.boolean().optional().label('agreed pricing should be updated'),
  };
};

module.exports = PricingGroupYear;
