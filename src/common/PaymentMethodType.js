var SingleEntity = require('./SingleEntity');

function PaymentMethodType(id) {
  this.path = 'paymentmethodtype';
  this.createPath = 'paymentmethodtype';
  this.id = id;
}
PaymentMethodType.prototype = new SingleEntity();

PaymentMethodType.prototype.toArray = function() {
  return {
    paymentmethodtype: this.paymentmethodtype,
  };
};

module.exports = PaymentMethodType;
