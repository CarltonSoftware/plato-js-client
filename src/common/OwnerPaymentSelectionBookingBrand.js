var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function OwnerPaymentSelectionBookingBrand(id) {
  this.path = 'bookingbrand';
  this.createPath = 'bookingbrand';
  this.id = id;
  this.bookingbrand = new EntityLink({
    entity: 'BookingBrand'
  });
}
OwnerPaymentSelectionBookingBrand.prototype = new SingleEntity();

OwnerPaymentSelectionBookingBrand.prototype.toArray = function() {
  return {
    bookingbrandid: this.bookingbrand.id
  };
};

OwnerPaymentSelectionBookingBrand.prototype.validSchema = function() {
  return Joi.object().keys({
    bookingbrand: Joi.object().required().label('booking brand')
  });
};

module.exports = OwnerPaymentSelectionBookingBrand;
