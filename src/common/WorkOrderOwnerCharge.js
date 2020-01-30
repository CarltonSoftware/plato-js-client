var SingleEntity = require('./SingleEntity');
var OwnerChargeCode = require('./OwnerChargeCode');
var OwnerChargeAmountType = require('./OwnerChargeAmountType');

function WorkOrderOwnerCharge(id) {
  this.path = this.createPath = 'ownercharge';
  this.id = id;

  this.ownerchargecode = new OwnerChargeCode();
  this.ownerchargeamounttype = new OwnerChargeAmountType();
}
WorkOrderOwnerCharge.prototype = new SingleEntity();

WorkOrderOwnerCharge.prototype.toArray = function() {
  return {
    ownerchargecodeid: this.ownerchargecode.id,
    ownerchargeamounttypeid: this.ownerchargeamounttype.id,
    description: this.description,
    amount: this.amount,
    invoicenumber: this.invoicenumber,
    invoicedate: this.invoicedate,
  };
};

module.exports = WorkOrderOwnerCharge;
