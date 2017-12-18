var Joi = require('joi');
var SingleEntity = require('./SingleEntity');

function AffiliateApiKey(id) {
  this.path = 'apikey';
  this.createPath = 'apikey';
}
AffiliateApiKey.prototype = new SingleEntity();

AffiliateApiKey.prototype.validSchema = function() {
  return Joi.object().keys({
    apikey: Joi.string().label('API key')
  });
};

module.exports = AffiliateApiKey;
