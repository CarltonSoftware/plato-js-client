var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var Bookingbrand = require('./Bookingbrand');
var Keycheckreason = require('./Keycheckreason');

function KeysBookingBrand(id) {
  this.path = 'keysbookingbrand';
  this.createPath = 'keysbookingbrand';
  this.id = id;
  this.BookingBrand = new Bookingbrand();
  this.defaultkeycheckreason = new Keycheckreason();
}
KeysBookingBrand.prototype = new SingleEntity();

KeysBookingBrand.prototype.toArray = function() {
  return {
    //TODO: Add in the fields necessary to create a KeysBookingBrand
    BookingBrand: this.BookingBrand,
    defaultkeycheckreason: this.defaultkeycheckreason,
  };
};

KeysBookingBrand.prototype.validSchema = function() {
  return Joi.object().keys({
    bookingbrand: Joi.object().required().label('Booking Brand'),
    defaultkeycheckreason: Joi.object().label('Default Key Check Reason'),
  });
};

module.exports = KeysBookingBrand;
