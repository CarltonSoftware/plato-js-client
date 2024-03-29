var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function VoucherRestriction(id) {
  this.path = 'restriction';
  this.createPath = 'restriction';
  this.id = id;
  this.property = new EntityLink({ entity: 'Property' });
  this.bookingbrand = new EntityLink({ entity: 'BookingBrand' });
  this.type = 'Property';

  this.validSchema = function() {
    var s = {};

    if (!this.id) {
      s.type = Joi.any().allow(['Property', 'BookingBrand']).label('restriction type');
    }

    if (this.type && this.type.toLowerCase() === 'property') {
      s.property = Joi.object().required().label('property');
    } else if (this.type && this.type.toLowerCase() === 'bookingbrand') {
      s.bookingbrand = Joi.object().required().label('booking brand');
    }

    return s;
  }
}

VoucherRestriction.prototype = new SingleEntity();

VoucherRestriction.prototype.toArray = function() {
  var arr = {
    type: this.type
  };

  if (this.property.id) {
    arr.propertyid = this.property.id;
  }

  if (this.bookingbrand.id) {
    arr.bookingbrandid = this.bookingbrand.id;
  }

  return arr;
};

module.exports = VoucherRestriction;
