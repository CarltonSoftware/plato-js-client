var SingleEntity = require('./SingleEntity');
var Joi = require('joi');


function ContactSchedulePeriod(id) {
  this.path = 'period';
  this.createPath = this.path;
  this.id = id;
}

ContactSchedulePeriod.prototype = new SingleEntity();

ContactSchedulePeriod.prototype.validSchema = function () {
  return {
    fromdate: Joi.date().required().label('from date'),
    todate: Joi.date().required().label('to date'),
    propertyid: Joi.number().optional().label('property id'),
    bookingbrandid: Joi.number().optional().label('branding id'),
    dayofweek: Joi.number().optional().label('day of week'),
    fromtime: Joi.string().optional().label('from time'),
    totime: Joi.string().optional().label('to time'),
    exclude: Joi.boolean().optional().label('branding id'),
  };
};

ContactSchedulePeriod.prototype.toArray = function () {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    propertyid: this.property.id,
    bookingbrandid: this.bookingbrandid.id,
    dayofweek: this.dayofweek,
    fromtime: this.fromtime,
    totime: this.totime,
    exclude: this.exclude
  }
};



module.exports = ContactSchedulePeriod;