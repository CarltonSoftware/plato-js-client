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
      value: Joi.number().required().label('voucher value'),
      paidforbyactor: Joi.object().required().label(
        'paid for by'
      ).description(
        'Who the voucher is paid for by.  Normally this will be the current customer.'
      ),
      forusebyactor: Joi.object().optional().label('for use by').description(
        'Who the voucher is to be used by.  Normally this will be the current customer.'
      )
    };

    if (!this.id) {
      s.bookingperiod_fromdate = Joi.date().required().label(
        'booking period from date'
      ).description('The start of the period which this voucher can be used in.');
      if (this.bookingperiod_fromdate) {
        s.bookingperiod_todate = Joi.date().required().label(
          'booking period to date'
        ).description('The end of the period which this voucher can be used in.');
      }

      s.holidayperiod_fromdate = Joi.date().required().label(
        'holiday period from date'
      ).description('The start of the holiday period which this voucher is applicable to.');
      if (this.holidayperiod_fromdate) {
        s.holidayperiod_todate = Joi.date().required().label(
          'holiday period to date'
        ).description('The end of the holiday period which this voucher is applicable to.');
      }

      s.restriction_type = Joi.any().allow(
        ['No restriction', 'Property', 'BookingBrand']
      ).label(
        'restriction type'
      ).description(
        'Choose either No Restriction, Property or Booking Brand restrictions. '
        + 'No restriction will mean the voucher will be applicable to any booking.'
      );
      if (this.restriction_type === 'BookingBrand') {
        s.restriction_bookingbrand = Joi.object().required().label('booking brand');
      } else if (this.restriction_type === 'Property') {
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
    if (['Property', 'BookingBrand'].indexOf(this.restriction_type) >= 0) {
      arr.restriction_type = this.restriction_type;
      if (this.restriction_bookingbrand) {
        arr.restriction_bookingbrandid = this.restriction_bookingbrand.id;
      }
      if (this.restriction_property) {
        arr.restriction_propertyid = this.restriction_property.id;
      }
    }
  }

  return arr;
};

/**
 * @returns {String}
 */
Voucher.prototype.toString = function() {
  return 'Unique code: ' + this.guid;
};

module.exports = Voucher;
