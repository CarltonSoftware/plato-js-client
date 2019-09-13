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
  
  var objToArray = {
    "compulsory": this.compulsory,
    "affiliateid": this.affiliate.id
  };
  
  if(this.vatband && this.vatband.id) {
    objToArray.vatbandid = this.vatband.id;
  }

  return objToArray;
};

module.exports = ExtraBrandingConfigurationAffiliateOverride;