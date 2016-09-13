var SingleEntity = require('./SingleEntity');
var ExtraBranding = require('./ExtraBranding');
var Joi = require('joi');

function Promotion(id) {
  this.path = this.createPath = 'promotion';
  this.id = id;
  this.extrabranding = new ExtraBranding();
}

Promotion.prototype = new SingleEntity();
Promotion.prototype.toArray = function() {
  return {
    promotioncode: this.promotioncode,
    extrabrandingid: this.extrabranding.id,
    usagelimit: this.usagelimit,
  };
};

Promotion.prototype.validSchema = function() {
  return Joi.object().keys({
    promotioncode: Joi.string().label('Promotion Code'),
    extrabranding: Joi.object().label('Extra Branding'),
    usagelimit: Joi.number().label('Usage Limit')
  });
};

module.exports = Promotion;
