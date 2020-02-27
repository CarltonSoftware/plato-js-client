var Joi = require('joi');
var Entity = require('./Entity');

function UpdatePricing(id) {
  this.path = 'updatepricing';
  this.createPath = 'updatepricing';
  this.id = id;
}

UpdatePricing.prototype = new Entity();

UpdatePricing.prototype.toArray = function() {
  var fields = {
    action: this.action,
    pricingperiodid: this.pricingperiodid,
    saleschannel: this.saleschannel,
    brandingids: this.brandingids,
    fromdate: this.fromdate,
    pricebandid: this.pricebandid,
    adjustforchangeday: this.adjustforchangeday,
    exactdatesonly: this.exactdatesonly,
  };

  if (this.pricebandids) {
    fields.pricebandids = this.pricebandids;
  }

  if (this.todate) {
    fields.todate = this.todate;
  }

  return fields;
};

UpdatePricing.prototype.create = function() {
  return this.createSimplePromiseResult(this.path, this.toArray());
};

UpdatePricing.prototype.validSchema = function() {
  return Joi.object().keys({
    action: Joi.any().valid('UpdatePriceBand').label('Action'),
    pricingperiodid: Joi.number().required().label('Pricing Period'),
    saleschannel: Joi.number().required().label('Sales Channel'),
    brandingids: Joi.string().required().label('Brandings'),
    fromdate: Joi.string().required().label('From Date'),
    pricebandid: Joi.number().required().label('New Price Band'),
    adjustforchangeday: Joi.boolean().label('Adjust For Change Day'),
    exactdatesonly: Joi.boolean().label('Exact Dates Only'),
    pricebandids: Joi.string().optional().label('Current Price Bands'),
    todate: Joi.string().optional().label('To Date'),
  });
};

module.exports = UpdatePricing;
