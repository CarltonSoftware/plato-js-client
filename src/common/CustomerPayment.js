var SingleEntity = require('./SingleEntity');
var Currency = require('./Currency');
var PaymentMethod = require('./PaymentMethod');

function CustomerPayment(id) {
  this.path = 'payment';
  this.createPath = 'payment';
  this.id = id;

  this.currency = new Currency();
  this.method = new PaymentMethod();
}

CustomerPayment.prototype = new SingleEntity();
CustomerPayment.prototype.toCreateArray = function() {
  var array = {
    paymentdatetime: this.paymentdatetime,
    reference: this.reference,
    paymentmethodid: this.paymentmethodid,
    amount: this.amount,
    currencyid: this.currencyid,
    bookingid: this.bookingid,
    bookingamount: this.bookingamount,
    securitydepositamount: this.securitydepositamount
  };
  return array;
};

module.exports = CustomerPayment;
