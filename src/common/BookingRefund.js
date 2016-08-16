var SingleEntity = require('./SingleEntity');

function BookingRefund(id) {
  this.path = 'refund';
  this.createPath = 'refund';
  this.id = id;
}

BookingRefund.prototype = new SingleEntity();
BookingRefund.prototype.toArray = function() {
  var array = {
    actorid: this.actor.id,
    paymentdatetime: this.paymentdatetime,
    reference: this.reference,
    paymentmethodid: this.paymentmethod.id,
    currencyid: this.currency.id
  };
  this.bookingpayments.forEach(function(bookingPayment) {
    var prefix = 'bookingpayment_' + bookingPayment.id;
    array[prefix + '_bookingamount'] = bookingPayment.bookingamount;
    array[prefix + '_securitydepositamount'] = bookingPayment.securitydepositamount;
  });
  return array;
};

module.exports = BookingRefund;
