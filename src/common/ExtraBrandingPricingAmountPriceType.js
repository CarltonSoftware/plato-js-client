var SingleEntity = require('./SingleEntity');
var Pricetype = require('./PriceType');
var Joi = require('joi');

function ExtraBrandingPricingAmountPriceType(extraId, brandingId, pricingId, id) {
  this.path = 'extra/' + extraId + '/branding/' + brandingId + '/pricing/' + pricingId + '/pricetype';
  this.createPath = this.path;
  this.id = id;
  this.PriceType = new Pricetype();
}
ExtraBrandingPricingAmountPriceType.prototype = new SingleEntity();

ExtraBrandingPricingAmountPriceType.prototype.toArray = function() {
  return {
    pricetypeid: this.pricetype.id,
    price: this.price,
  };
};

ExtraBrandingPricingAmountPriceType.prototype.validSchema = function() {
  return Joi.object().keys({
    pricetype: Joi.object().label('PriceType'),
    price: Joi.number().double().label('Price'),
  });
};

module.exports = ExtraBrandingPricingAmountPriceType;