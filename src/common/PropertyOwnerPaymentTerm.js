var SingleEntity = require('./SingleEntity');
var OnwerPaymentTerm = require('./OwnerPaymentTerm');

function PropertyOwnerPaymentTerm(id) {
  this.path = 'ownerpaymentterms';
  this.createPath = 'ownerpaymentterms';
  this.id = id;
  this.ownerpaymentterm = new OwnerPaymentTerm();
};

PropertyOwnerPaymentTerm.prototype = new SingleEntity();
PropertyOwnerPaymentTerm.prototype.toArray = function() {
  return {
    id: this.id,
    fromdate: this.fromdate,
    todate: this.todate,
    ownerpaymenttermsid: this.ownerpaymentterm.id
  }
};

module.exports = PropertyOwnerPaymentTerm;
