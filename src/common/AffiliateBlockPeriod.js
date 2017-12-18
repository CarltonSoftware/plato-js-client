var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var BookingBrand = require('./BookingBrand');

function AffiliateBlockPeriod(id) {
  this.path = 'blockperiod';
  this.createPath = 'blockperiod';
  this.id = id;	
}
AffiliateBlockPeriod.prototype = new SingleEntity();

AffiliateBlockPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    apikey: Joi.string().label('API key')
  });
};

module.exports = AffiliateBlockPeriod;
