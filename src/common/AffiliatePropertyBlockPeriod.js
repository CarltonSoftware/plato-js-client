var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var Property = require('./Property');

function AffiliatePropertyBlockPeriod(id) {
  this.path = 'propertyblockperiod';
  this.createPath = 'propertyblockperiod';
  this.id = id;
  this.property = new Property();
}
AffiliatePropertyBlockPeriod.prototype = new SingleEntity();

AffiliatePropertyBlockPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.date(),
    todate: Joi.date(),
    block: Joi.boolean(),
    property: Joi.object()
  });
};

AffiliatePropertyBlockPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    block: this.block,
    propertyid: this.property.id
  };
};

module.exports = AffiliatePropertyBlockPeriod;
