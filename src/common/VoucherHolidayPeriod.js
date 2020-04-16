var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function VoucherHolidayPeriod(id) {
  this.path = 'holidayperiod';
  this.createPath = 'holidayperiod';
  this.id = id;

  this.validSchema = function() {
    return {
      fromdate: Joi.date().required().label('from date'),
      todate: Joi.date().required().label('to date')
    };
  }
}
VoucherHolidayPeriod.prototype = new SingleEntity();

VoucherHolidayPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = VoucherHolidayPeriod;
