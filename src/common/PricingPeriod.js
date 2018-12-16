var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PricingPeriod(id) {
  this.path = 'pricingperiod';
  this.createPath = 'pricingperiod';
  this.id = id;

  this.validSchema = function() {
    return {
      pricingperiod: Joi.string().required().label('Pricing Period'),
      days: Joi.number().required().label('days'),
      weeks: Joi.number().required().label('weeks'),
      months: Joi.number().required().label('months'),
      subperiod: Joi.string().required().label('subperiod')
    }
  };
}
PricingPeriod.prototype = new SingleEntity();

PricingPeriod.prototype.toArray = function() {
  return {
    pricingperiod: this.pricingperiod,
    days: this.days,
    weeks: this.weeks,
    months: this.months,
    subperiod: this.subperiod
  };
};

module.exports = PricingPeriod;
