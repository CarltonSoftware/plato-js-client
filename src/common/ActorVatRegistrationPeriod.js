var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ActorVatRegistrationPeriod(id) {
  this.path = 'vatregistrationperiod';
  this.createPath = 'vatregistrationperiod';
  this.id = id;
}
ActorVatRegistrationPeriod.prototype = new SingleEntity();

ActorVatRegistrationPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    vatnumber: this.vatnumber
  };
};

ActorVatRegistrationPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.string().required().label('From date'),
    todate: Joi.string().required().label('To Date'),
    vatnumber: Joi.string().required().label('Vat number')
  });
};

module.exports = ActorVatRegistrationPeriod;