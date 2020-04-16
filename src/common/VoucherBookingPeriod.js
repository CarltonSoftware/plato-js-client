var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function VoucherBookingPeriod(id) {
  this.path = 'bookingperiod';
  this.createPath = 'bookingperiod';
  this.id = id;

  this.validSchema = function() {
    return {
      fromdate: Joi.date().required().label('from date'),
      todate: Joi.date().required().label('to date')
    };
  }
}
VoucherBookingPeriod.prototype = new SingleEntity();

VoucherBookingPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    fromdate: this.fromdate
  };
};

module.exports = VoucherBookingPeriod;
