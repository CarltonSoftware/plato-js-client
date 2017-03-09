var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function AccountingPeriod(id) {
  this.path = 'accountingperiod';
  this.createPath = 'accountingperiod';
  this.id = id;
}
AccountingPeriod.prototype = new SingleEntity();

AccountingPeriod.prototype.toArray = function() {
  return {
    name: this.name,
    startdate: this.startdate,
    enddate: this.enddate,
    closeddate: this.closeddate,
  };
};

AccountingPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().required().label('name'),
    startdate: Joi.date().required().label('start date'),
    enddate: Joi.date().required().label('end date'),
    closeddate: Joi.date().label('closed date'),
  });
};

module.exports = AccountingPeriod;
