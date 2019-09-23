var SingleEntity = require('./SingleEntity');
var OwnerChargeCode = require('./OwnerChargeCode');
var OwnerChargeAmountType = require('./OwnerChargeAmountType');

function WorkOrderOwnerChargeTemplate(id) {
  this.path = this.createPath = 'workorderownerchargetemplate';
  this.id = id;

  this.ownerchargecode = new OwnerChargeCode();
  this.ownerchargeamounttype = new OwnerChargeAmountType();
}
WorkOrderOwnerChargeTemplate.prototype = new SingleEntity();

WorkOrderOwnerChargeTemplate.prototype.toArray = function() {
  return {
    ownerchargecodeid: this.ownerchargecode.id,
    ownerchargeamounttypeid: this.ownerchargeamounttype.id,
    description: this.description,
    amount: this.amount,
  };
};

module.exports = WorkOrderOwnerChargeTemplate;
