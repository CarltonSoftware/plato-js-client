var SingleEntity = require('./SingleEntity');
var Voucher = require('./Voucher');
var Joi = require('joi');

function BookingVoucher(id) {
  this.path = 'voucher';
  this.createPath = 'voucher';
  this.id = id;
  this.voucher = new Voucher();

  this.validSchema = function() {
    return {
      bookingamount: Joi.number().required().label('booking amount'),
      securitydepositamount: Joi.number().required().label('security deposit amount'),
      voucher_useddatetime: Joi.date().optional().label('voucher used date time'),
      voucher_usedbyactorid: Joi.number().optional().label('voucher used by actor id'),
      voucher: Joi.object().required().label('voucher')
    };
  }
}
BookingVoucher.prototype = new SingleEntity();

BookingVoucher.prototype.toArray = function() {
  var arr = {
    bookingamount: this.bookingamount,
    securitydepositamount: this.securitydepositamount,
    voucher_useddatetime: this.voucher_useddatetime,
    voucher_usedbyactorid: this.voucher_usedbyactorid
  };

  if (this.voucher.id) {
    arr.voucherid = this.voucher.id;
  }

  return arr;
};

module.exports = BookingVoucher;
