var SingleEntity = require('./SingleEntity');

function OwnerPaymentType(id) {
  this.path = this.createPath = 'creditorpaymentmethod';
  this.id = id;
}

OwnerPaymentType.prototype = new SingleEntity();
OwnerPaymentType.prototype.toArray = function() {
  return {
    creditorpaymentmethod: this.creditorpaymentmethod,
  };
};

module.exports = OwnerPaymentType;
