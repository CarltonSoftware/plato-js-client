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
    return {
      value: Joi.number().required().label('value'),
      paidforbyactor: Joi.object().required().label('paid for by'),
      forusebyactor: Joi.object().optional().label('for use by'),
      useddatetime: Joi.date().optional().label('used date'),
      usedbyactor: Joi.object().optional().label('used by'),
      cancelleddatetime: Joi.date().optional().label('cancelled at time'),
      cancelledbyactor: Joi.object().optional().label('cancellled by')
    };
  }
}

Voucher.prototype = new SingleEntity();

/**
 * @returns {Object}
 */
Voucher.prototype.toArray = function() {
  var arr = {
    value: this.value,
    useddatetime: this.useddatetime,
    cancelleddatetime: this.cancelleddatetime
  };

  ['paidforbyactor', 'forusebyactor', 'usedbyactor', 'createdbyactor', 'cancelledbyactor'].forEach(function(key) {
    if (this[key].id) {
      arr[key + 'id'] = this[key].id;
    }
  }.bind(this));

  return arr;
};

module.exports = Voucher;
