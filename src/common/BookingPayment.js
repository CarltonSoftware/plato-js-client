var SingleEntity = require('./SingleEntity');

function BookingPayment(id) {
  this.path = 'payment';
  this.createPath = 'payment';
  this.id = id;
}

BookingPayment.prototype = new SingleEntity();
BookingPayment.prototype.toCreateArray = function() {
  var array = {
    type: this.type,
    paymentdatetime: this.paymentdatetime,
    amount: this.amount,
    actorid: this.actor.id,
    amount: this.amount,
    bookingamount: this.bookingamount,
    securitydepositamount: this.securitydepositamount
  };
  return array;
};

module.exports = BookingPayment;