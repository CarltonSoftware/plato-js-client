var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function BookingReason(id) {
  this.path = 'bookingreason';
  this.createPath = 'bookingreason';
  this.id = id;
}
BookingReason.prototype = new SingleEntity();

BookingReason.prototype.toArray = function() {
  return {
    bookingreason: this.bookingreason
  };
};

BookingReason.prototype.validSchema = function() {
  return Joi.object().keys({
    bookingreason: Joi.string().required().label('Booking Reason'),
  });
};

module.exports = BookingReason;
