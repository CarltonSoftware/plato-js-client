var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var BookingBrand = require('./BookingBrand');
var KeyCheckReason = require('./KeyCheckReason');

function KeysBookingBrand(id) {
  this.path = 'keysbookingbrand';
  this.createPath = 'keysbookingbrand';
  this.id = id;
  this.bookingbrand = new BookingBrand();
  this.defaultkeycheckreason = new KeyCheckReason();
}
KeysBookingBrand.prototype = new SingleEntity();

KeysBookingBrand.prototype.toArray = function() {
  return {
    bookingbrandid: this.bookingbrand.id,
    defaultkeycheckreasonid: this.defaultkeycheckreason.id
  };
};

KeysBookingBrand.prototype.validSchema = function() {
  return Joi.object().keys({
    bookingbrand: Joi.object().required().label('Booking Brand'),
    defaultkeycheckreason: Joi.object().label('Default Key Check Reason'),
  });
};

module.exports = KeysBookingBrand;
