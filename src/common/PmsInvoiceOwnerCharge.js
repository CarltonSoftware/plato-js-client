var SingleEntity = require('./SingleEntity');
var OwnerCharge = require('./OwnerCharge');

PmsInvoiceOwnerCharge.prototype = new SingleEntity();

function PmsInvoiceOwnerCharge(id) {
  this.path = 'pmsinvoice';
  this.createPath = this.path;
  this.ownercharge = new OwnerCharge();
  this.id = id;
}

PmsInvoiceOwnerCharge.prototype.toArray = function() {
  return {
    ownerchargeid: this.ownercharge.id
  };
};

module.exports = PmsInvoiceOwnerCharge;
