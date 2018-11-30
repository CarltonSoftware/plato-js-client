var SingleEntity = require('./SingleEntity');
var AmountLimitType = require('./AmountLimitType');
var CostItemCode = require('./CostItemCode');
var SupplierInvoiceItem = require('./SupplierInvoiceItem');
var OwnerChargeCode = require('./OwnerChargeCode');
var OwnerChargeAmountType = require('./OwnerChargeAmountType');

function WorkOrderExpense(id) {
  this.path = this.createPath = 'expense';
  this.id = id;
  this.amountlimittype = new AmountLimitType();
  this.costitemcode = new CostItemCode();
  this.supplierinvoiceitem = new SupplierInvoiceItem();
  this.ownerchargecode = new OwnerChargeCode();
  this.ownerchargeamounttype = new OwnerChargeAmountType();
}
WorkOrderExpense.prototype = new SingleEntity();

WorkOrderExpense.prototype.toArray = function() {
  return {
    description: this.description,
    amountnetestimate: this.amountnetestimate,
    amountlimitypeid: this.amountlimittype.id,
    amountnetlimit: this.amountnetlimit,
    costitemcodeid: this.costitemcode.id,
    supplierinvoiceitemid: this.supplierinvoiceitem.id,
    amountnet: this.amountnet,
    amountvat: this.amountvat,
    currencyid: this.currency.id,
    vatbandid: this.vatband.id,
    ownerchargecodeid: this.ownerchargecode.id,
    ownerchargeamounttypeid: this.ownerchargeamounttype.id,
    ownerchargeamount: this.ownerchargeamount
  };
};

module.exports = WorkOrderExpense;
