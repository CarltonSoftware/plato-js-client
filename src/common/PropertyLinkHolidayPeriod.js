var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function PropertyLinkHolidayPeriod(id) {
  this.path = this.createPath = 'holidayperiod';
  this.id = id;
}

PropertyLinkHolidayPeriod.prototype = new SingleEntity();
PropertyLinkHolidayPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate
  };
};

PropertyLinkHolidayPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.date().required().label('From date'),
    todate: Joi.date().required().label('To date')
  });
};

module.exports = PropertyLinkHolidayPeriod;
