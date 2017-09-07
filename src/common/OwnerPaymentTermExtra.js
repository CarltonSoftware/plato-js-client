var SingleEntity = require('./SingleEntity');
var Extra = require('./Extra');

function OwnerPaymentTermExtra(id) {
  this.path = 'extra';
  this.createPath = 'extra';
  this.id = id;
  this.extra = new Extra();
}

OwnerPaymentTermExtra.prototype = new SingleEntity();
OwnerPaymentTermExtra.prototype.toArray = function() {
  return {
    extraid: this.extra.id,
    addtodepositpaid: this.addtodepositpaid,
    subtractfromdepositpaid: this.subtractfromdepositpaid,
    payondeposit: this.payondeposit,
    dontpayondeposit: this.dontpayondeposit
  };
};

module.exports = OwnerPaymentTermExtra;
