var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function ParkingPermitHolidayPeriod(id) {
  this.path = this.createPath = 'holidayperiod';
  this.id = id;

  this.validSchema = function() {
    return {
      fromdate: Joi.date().required().label('from date'),
      todate: Joi.date().required().label('to date'),
      samedateseveryyear: Joi.boolean().required().label('same dates every year?')
    };
  };
}

ParkingPermitHolidayPeriod.prototype = new SingleEntity();
ParkingPermitHolidayPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    samedateseveryyear: this.samedateseveryyear
  };
};

module.exports = ParkingPermitHolidayPeriod;
