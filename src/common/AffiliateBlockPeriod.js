var Joi = require('joi');
var SingleEntity = require('./SingleEntity');
var BookingBrand = require('./BookingBrand');

function AffiliateBlockPeriod(id) {
  this.path = 'blockperiod';
  this.createPath = 'blockperiod';
  this.id = id;
  this.bookingbrand = new BookingBrand();
}
AffiliateBlockPeriod.prototype = new SingleEntity();

AffiliateBlockPeriod.prototype.validSchema = function() {
  return Joi.object().keys({
    fromdate: Joi.date(),
    todate: Joi.date(),
    bookingbrand: Joi.object()
  });
};

AffiliateBlockPeriod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    bookingbrandid: this.bookingbrand.id
  };
};

module.exports = AffiliateBlockPeriod;
