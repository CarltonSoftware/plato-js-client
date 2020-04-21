var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var EntityLink = require('./EntityLink');
var VoucherBookingPeriod = require('./VoucherBookingPeriod');
var VoucherHolidayPeriod = require('./VoucherHolidayPeriod');
var VoucherRestriction = require('./VoucherRestriction');
var Joi = require('joi');

/**
 * @param {number} id
 */
function Voucher(id) {
  this.id = id;
  this.path = 'voucher';
  this.createPath = 'voucher';

  this.bookingperiods = new Collection({
    object: VoucherBookingPeriod,
    path: 'bookingperiod',
    parent: this
  });
  this.holidayperiods = new Collection({
    object: VoucherHolidayPeriod,
    path: 'holidayperiod',
    parent: this
  });
  this.restrictions = new Collection({
    object: VoucherRestriction,
    path: 'restriction',
    parent: this
  });
  this.paidforbyactor = new EntityLink({ entity: 'Customer' });
  this.forusebyactor = new EntityLink({ entity: 'Customer' });
  this.usedbyactor = new EntityLink({ entity: 'Customer' });
  this.createdbyactor = new EntityLink({ entity: 'Actor' });
  this.cancelledbyactor = new EntityLink({ entity: 'Actor' });
  this.booking = new EntityLink({ entity: 'Booking' });

  this.validSchema = function() {
    var s = {
      value: Joi.number().required().label('value'),
      paidforbyactor: Joi.object().required().label('paid for by'),
      forusebyactor: Joi.object().optional().label('for use by'),
      cancelledbyactor: Joi.object().optional().label('cancellled by')
    };

    if (!this.id) {
      s.bookingperiod_fromdate = Joi.date().optional().label('booking period from date');

      if (this.bookingperiod_fromdate) {
        s.bookingperiod_fromdate = Joi.date().required().label('booking period from date');
        s.bookingperiod_todate = Joi.date().required().label('booking period to date');
      }

      s.holidayperiod_fromdate = Joi.date().optional().label('holiday period from date');

      if (this.holidayperiod_fromdate) {
        s.holidayperiod_fromdate = Joi.date().required().label('holiday period from date');
        s.holidayperiod_todate = Joi.date().required().label('holiday period to date');
      }
      s.restriction_type = Joi.any().allow(['Property', 'BookingBrand']).label('restriction type');

      if (this.restriction_type === 'BookingBrand') {
        s.restriction_bookingbrand = Joi.object().required().label('booking brand');
      } else {
        s.restriction_property = Joi.object().required().label('property');
      }
    }

    return s;
  }.bind(this)
}

Voucher.prototype = new SingleEntity();

/**
 * @returns {Object}
 */
Voucher.prototype.toArray = function() {
  var arr = {
    value: this.value,
    cancelleddatetime: this.cancelleddatetime
  };

  ['paidforbyactor', 'forusebyactor', 'usedbyactor', 'createdbyactor', 'cancelledbyactor'].forEach(function(key) {
    if (this[key].id) {
      arr[key + 'id'] = this[key].id;
    }
  }.bind(this));

  if (!this.id) {
    arr.bookingperiod_fromdate = this.bookingperiod_fromdate;
    arr.bookingperiod_todate = this.bookingperiod_todate;
    arr.holidayperiod_fromdate = this.holidayperiod_fromdate;
    arr.holidayperiod_todate = this.holidayperiod_todate;
    arr.restriction_type = this.restriction_type;
    if (this.restriction_bookingbrand) {
      arr.restriction_bookingbrandid = this.restriction_bookingbrand.id;
    }
    if (this.restriction_property) {
      arr.restriction_propertyid = this.restriction_property.id;
    }
  }

  return arr;
};

module.exports = Voucher;
