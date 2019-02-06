var SingleEntity = require('./SingleEntity');
var AmountLimitType = require('./AmountLimitType');
var CostItemCode = require('./CostItemCode');
var SupplierInvoiceItem = require('./SupplierInvoiceItem');
var OwnerChargeCode = require('./OwnerChargeCode');
var OwnerChargeAmountType = require('./OwnerChargeAmountType');
var Currency = require('./Currency');
var VatBand = require('./VatBand');
var ChargingPeriod = require('./ChargingPeriod');
var WorkOrderOwnerCharge = require('./WorkOrderOwnerCharge');
var Collection = require('./Collection');

function WorkOrderExpense(id) {
  this.path = this.createPath = 'expense';
  this.id = id;
  this.amountlimittype = new AmountLimitType();
  this.costitemcode = new CostItemCode();
  this.supplierinvoiceitem = new SupplierInvoiceItem();
  this.ownerchargecode = new OwnerChargeCode();
  this.ownerchargeamounttype = new OwnerChargeAmountType();
  this.currency = new Currency();
  this.vatband = new VatBand();
  this.chargingperiod = new ChargingPeriod();

  this.ownercharges = new Collection({
    object: WorkOrderOwnerCharge,
    path: 'ownercharge',
    parent: this
  });
}
WorkOrderExpense.prototype = new SingleEntity();

WorkOrderExpense.prototype.toArray = function() {

  var obj = {
    description: this.description,
    currencyid: this.currency.id,
    vatbandid: this.vatband.id,
    ownerchargeamount: this.ownerchargeamount,
  };

  if (this.costitemcode.id) {obj.costitemcodeid = this.costitemcode.id;}
  if (this.ownerchargecode.id) {obj.ownerchargecodeid = this.ownerchargecode.id;}
  if (this.ownerchargeamounttype.id) {obj.ownerchargeamounttypeid = this.ownerchargeamounttype.id;}
  if (this.chargingperiod.id) {obj.chargingperiodid = this.chargingperiod.id;}

  if (this.parent.type === 'Template') {
    obj.amountnetestimate = this.amountnetestimate;
    obj.amountnetlimit = this.amountnetlimit;
    obj.chargingperiodsestimate = this.chargingperiodsestimate;
    if (this.amountlimittype.id) {obj.amountlimittypeid = this.amountlimittype.id;}
  } else {
    obj.amountnet = this.amountnet;
    obj.amountvat = this.amountvat;
    obj.notes = this.notes;
    if (this.supplierinvoiceitem.id) {obj.supplierinvoiceitemid = this.supplierinvoiceitem.id;}
  }
  
  return obj;

};

module.exports = WorkOrderExpense;
