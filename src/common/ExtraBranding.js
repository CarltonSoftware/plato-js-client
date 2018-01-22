var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var ExtraBrandingConfiguration = require('./ExtraBrandingConfiguration');
var ExtraBrandingPricing = require('./ExtraBrandingPricing');
var Collection = require('./Collection');
var Branding = require('./Branding');

function ExtraBranding(extraId,id) {
  this.path = 'extra/' + extraId + '/branding';
  this.createPath = 'extra/' + extraId + '/branding';
  this.id = id;

  this.branding = new Branding();
  this.brandingConfiguration = new Collection({
    object: ExtraBrandingConfiguration,
    path: 'configuration',
    parent: this
  });
  this.pricing = new Collection({
    object: ExtraBrandingPricing,
    path: 'pricing',
    parent: this
  });
}
ExtraBranding.prototype = new SingleEntity();

ExtraBranding.prototype.toCreateArray = function() {
  return {
    brandingid: this.brandingid,
    copytoallbrands: this.copytoallbrands
  };
};

ExtraBranding.prototype.toUpdateArray = function() {
  return {
    brandingid: this.brandingid,
  };
};

ExtraBranding.validSchema = Joi.object().keys({
  brandingid: Joi.string().required().label('branding'),
  copytoallbrands: Joi.boolean().label('copy to all brands')
});

module.exports = ExtraBranding;
