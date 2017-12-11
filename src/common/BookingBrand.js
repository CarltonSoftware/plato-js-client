var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function BookingBrand(id) {
  this.path = 'bookingbrand';
  this.createPath = 'bookingbrand';
  this.id = id;
  this.agency = new EntityLink({
    entity: 'Agency'
  });

  this.validSchema = function() {
    return {
      code: Joi.string().required().min(2).max(4).uppercase().label('Code'),
      name: Joi.string().min(1).required().label('Name'),
      agency: Joi.object().required().label('Agency')
    };
  };
}
BookingBrand.prototype = new SingleEntity();

BookingBrand.prototype.toArray = function() {
  return {
    bookingbrandcode: this.code,
    bookingbrand: this.name,
    agencyid: this.agency.id
  };
};

BookingBrand.prototype.toString = function() {
  return this.name;
};

module.exports = BookingBrand;
