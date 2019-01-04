var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

/**
 * Pricetype object
 *
 * @param {number} id
 */
function PriceType(id) {
  this.path = 'pricetype';
  this.createPath = 'pricetype';
  this.id = id;

  this.validSchema = function() {
    return {
      pricetype: Joi.string().required().label('price type'),
      pricingperiod: Joi.object().required().label('pricing period'),
      description: Joi.string().required().label('Description'),
      periods: Joi.number().required().label('Periods'),
      additional: Joi.boolean().optional().label('Additional')
    };
  };
}

PriceType.prototype = new SingleEntity();
PriceType.prototype.toArray = function() {
  return {
    pricetype: this.pricetype,
    pricingperiod: typeof this.pricingperiod === 'string' ? this.pricingperiod : this.pricingperiod.pricingperiod,
    description: this.description,
    periods: this.periods,
    additional: this.additional
  };
};

module.exports = PriceType;
