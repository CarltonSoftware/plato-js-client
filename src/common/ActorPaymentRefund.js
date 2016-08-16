var SingleEntity = require('./SingleEntity');

function ActorPaymentRefund(id) {
  this.path = 'refund';
  this.createPath = 'refund';
  this.id = id;
}

ActorPaymentRefund.prototype = new SingleEntity();
ActorPaymentRefund.prototype.toArray = function() {
  var array = {
    paymentdatetime: this.paymentdatetime,
    reference: this.reference,
    paymentmethodid: this.paymentmethod.id,
    amount: this.amount
  };
  this.bookingpayments.forEach(function(bookingPayment) {
    var prefix = 'bookingpayment_' + bookingPayment.id;
    array[prefix + '_bookingamount'] = bookingPayment.bookingamount;
    array[prefix + '_securitydepositamount'] = bookingPayment.securitydepositamount;
  });
  return array;
};

module.exports = ActorPaymentRefund;
