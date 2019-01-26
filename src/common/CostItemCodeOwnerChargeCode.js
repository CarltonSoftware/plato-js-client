var SingleEntity = require('./SingleEntity');
var CostItemCode = require('./CostItemCode');
var OwnerChargeCode = require('./OwnerChargeCode');

function CostItemCodeOwnerChargeCode(id) {
  this.path = this.createPath = 'ownerchargecode';
  this.id = id;

  this.costitemcode = new CostItemCode();
  this.ownerchargecode = new OwnerChargeCode();
}

CostItemCodeOwnerChargeCode.prototype = new SingleEntity();

CostItemCodeOwnerChargeCode.prototype.toArray = function() {
  return {
    costitemcodeid: this.costitemcode.id,
    ownerchargecodeid: this.ownerchargecode.id,
  };
};

module.exports = CostItemCodeOwnerChargeCode;
