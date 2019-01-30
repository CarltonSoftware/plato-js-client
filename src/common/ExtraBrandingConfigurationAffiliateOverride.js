var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ExtraBrandingConfigurationAffiliateOverride(id) {
  this.path = 'affiliateoverride';
  this.createPath = this.path;
  this.id = id;

  this.validSchema = function() {
    return {
      compulsory: Joi.bool().required().label('compulsory'),
    };
  };
}

ExtraBrandingConfigurationAffiliateOverride.prototype = new SingleEntity();

ExtraBrandingConfigurationAffiliateOverride.prototype.toArray = function() {
  return {
    "compulsory": this.compulsory
    //add more config options later
  };
};

module.exports = ExtraBrandingConfigurationAffiliateOverride;