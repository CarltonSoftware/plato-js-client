var SingleEntity = require('./SingleEntity');
var Joi = require('joi');

function SpecialOfferBookingPeriod(id) {
  this.path = this.createPath = 'bookingperiod';
  this.id = id;
}

SpecialOfferBookingPeriod.prototype = new SingleEntity();
SpecialOfferBookingPeriod.prototype.toArray = function() {
  return {
    id: this.id,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

SpecialOfferBookingPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.string().required(),
    todate: Joi.string().required()
  });
};

module.exports = SpecialOfferBookingPeriod;
