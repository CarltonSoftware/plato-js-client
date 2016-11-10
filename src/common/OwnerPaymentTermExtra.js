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
    takefromdeposit: this.takefromdeposit
  };
};

module.exports = OwnerPaymentTermExtra;
