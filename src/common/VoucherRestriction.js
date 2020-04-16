var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function VoucherRestriction(id) {
  this.path = 'restriction';
  this.createPath = 'restriction';
  this.id = id;
  this.property = new EntityLink({ entity: 'Property' });
  this.bookingbrand = new EntityLink({ entity: 'BookingBrand' });

  this.validSchema = function() {
    var s = {
      type: Joi.string().required().label('type')
    }

    if (this.type === 'property') {
      s.property = Joi.object().required().label('property');
    } else if (this.type === 'bookingbrand') {
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
