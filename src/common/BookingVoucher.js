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
      bookingamount: Joi.number().optional().label('booking amount').description(
        'Optional booking amount.  Leave blank if you want tabs to use the full '
        + 'amount on the booking and any remainder allocated to a damage deposit.'
        + 'Any further remaining voucher balance will be used in creating a new voucher for the customer.'
      ),
      securitydepositamount: Joi.number().optional().label('security deposit amount').description('Optional booking damage deposit amount.'),
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
