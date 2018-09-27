var Joi = require('joi');
var SingleEntity = require('./SingleEntity');

function BrandingLeadTimePeriod(id) {
  this.path = 'leadtimeperiod';
  this.createPath = 'leadtimeperiod';
  this.id = id;
}
BrandingLeadTimePeriod.prototype = new SingleEntity();

BrandingLeadTimePeriod.prototype.toArray = function() {
  return {
    leaddaysfrom: this.leaddaysfrom,
    leaddaysto: this.leaddaysto,
    depositduedays: this.depositduedays
  };
};

BrandingLeadTimePeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    leaddaysfrom: Joi.number().required().label('Lead days from'),
    leaddaysto: Joi.number().required().label('Lead days to'),
    depositduedays: Joi.number().required().label('deposit due days'),
  });
};

module.exports = BrandingLeadTimePeriod;