var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function OwnerNonResidentPeriod(id) {
  this.path = 'nonresidentperiod';
  this.createPath = 'nonresidentperiod';
  this.id = id;
}
OwnerNonResidentPeriod.prototype = new SingleEntity();

OwnerNonResidentPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
  };
};

OwnerNonResidentPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.string().required().label('From date'),
    todate: Joi.string().required().label('To Date'),
  });
};

module.exports = OwnerNonResidentPeriod;