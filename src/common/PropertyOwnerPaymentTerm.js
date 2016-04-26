var SingleEntity = require('./SingleEntity');
var OwnerPaymentTerm = require('./OwnerPaymentTerm');

function PropertyOwnerPaymentTerm(id) {
  this.path = 'ownerpaymentterms';
  this.createPath = 'ownerpaymentterms';
  this.id = id;
  this.ownerpaymentterms = new OwnerPaymentTerm();
}

PropertyOwnerPaymentTerm.prototype = new SingleEntity();
PropertyOwnerPaymentTerm.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    ownerpaymenttermsid: this.ownerpaymentterms.id
  };
};

module.exports = PropertyOwnerPaymentTerm;