var SingleEntity = require('./SingleEntity');

function OwnerPaymentType(id) {
  this.path = this.createPath = 'ownerpaymenttype';
  this.id = id;
}

OwnerPaymentType.prototype = new SingleEntity();
OwnerPaymentType.prototype.toArray = function() {
  return {
    ownerpaymenttype: this.ownerpaymenttype,
  };
};

module.exports = OwnerPaymentType;
