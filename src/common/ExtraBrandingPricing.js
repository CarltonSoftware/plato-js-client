var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Currency = require('./Currency');

function ExtraBrandingPricing(extraId, brandingId, id) {
  this.path = 'extra/' + extraId + '/branding/' + brandingId + '/pricing';
  this.createPath = this.path;
  this.id = id;
  this.currency = new Currency();
  this.dailyprices = new Collection({ object: Currency });
}
ExtraBrandingPricing.prototype = new SingleEntity();

ExtraBrandingPricing.prototype.toCreateArray = function() {
  var array = {
    pricingperiod: this.pricingperiod,
    propertypricing: this.propertypricing,
    propertyid: this.propertyid,
    fromdate: this.fromdate,
    todate: this.todate,
    currencycode: this.currency.code,
    pricingtype: this.pricingtype,
    perperiod: this.perperiod // will be overridden to True for pricingtype = Percentage or Range
  };

  if (this.pricingtype == 'Amount') {
    array.price = this.price;
    array.peradult = this.peradult;
    array.perchild = this.perchild;
    array.perinfant = this.perinfant;
  } else if (this.pricingtype == 'Percentage') {
    array.percentage = this.percentage;
    array.basedon = this.basedon;
    array.minimumprice = this.minimumprice;
    array.maximumprice = this.maximumprice;
  } else if (this.pricingtype == 'Range') {
    // array.ranges = array, impossible
    array.basedon = this.basedon;
  }

  return array;
};

ExtraBrandingPricing.prototype.toUpdateArray = function() {
  var array = this.toCreateArray();
  delete array.pricingperiod; // The pricingperiod field cannot be updated
  delete array.perperiod; // The perperiod field cannot be updated
  return array;
};

ExtraBrandingPricing.validSchema = Joi.object().keys({
  pricingtype : Joi.string().valid('Amount', 'Percentage', 'Range').label('pricing type'),
  pricingperiod: Joi.string().required().label('pricing period'),
  propertypricing: Joi.boolean().label('property pricing'),
  fromdate: Joi.string().required().label('fromdate'),
  todate: Joi.string().required().label('todate'),
  currency: Joi.object().required().label('currency'),
  perperiod: Joi.when('pricingtype', { is: 'Amount',then: Joi.boolean().label('per period'), otherwise: Joi.forbidden() }),
  peradult: Joi.when('pricingtype', { is: 'Amount',then: Joi.boolean().label('per adult'), otherwise: Joi.forbidden() }),
  perchild: Joi.when('pricingtype', { is: 'Amount',then: Joi.boolean().label('per child'), otherwise: Joi.forbidden() }),
  perinfant: Joi.when('pricingtype', { is: 'Amount',then: Joi.boolean().label('per infant'), otherwise: Joi.forbidden() }),
  price: Joi.when('pricingtype', { is: 'Amount',then: Joi.number().required().label('price'), otherwise: Joi.forbidden() }),
  percentage: Joi.when('pricingtype', { is: 'Percentage',then: Joi.number().required().label('percentage'), otherwise: Joi.forbidden() }),
  basedon: Joi.when('pricingtype', { is: 'Amount',then: Joi.forbidden(), otherwise: Joi.string().valid('Basic', 'Brochure').label('based on') })
}),

module.exports = ExtraBrandingPricing;
