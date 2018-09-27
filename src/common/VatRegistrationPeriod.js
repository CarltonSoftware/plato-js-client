var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function VatRegistrationPeriod(id) {
  this.path = 'vatregistrationperiod';
  this.createPath = 'vatregistrationperiod';
  this.id = id;
}
VatRegistrationPeriod.prototype = new SingleEntity();

VatRegistrationPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
  };
};

VatRegistrationPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.string().required().label('From date'),
    todate: Joi.string().required().label('To Date')
  });
};

module.exports = VatRegistrationPeriod;
