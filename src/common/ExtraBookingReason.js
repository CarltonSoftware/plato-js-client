var SingleEntity = require('./SingleEntity');
var Joi = require('joi');
var BookingReason = require('./BookingReason');

function ExtraBookingReason(extraId,id) {
  this.path = 'bookingreason';
  this.createPath = 'bookingreason';
  this.id = id;

  this.bookingreason = new BookingReason();
}

ExtraBookingReason.prototype = new SingleEntity();

ExtraBookingReason.prototype.toArray = function() {
  return {
    bookingreasonid: this.bookingreasonid,
  };
};

ExtraBookingReason.validSchema = Joi.object().keys({
  bookingreasonid: Joi.number().required().label('bookingreasonid'),
});

module.exports = ExtraBookingReason;
