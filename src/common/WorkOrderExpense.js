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
    costitemcodeid: this.costitemcode.id ? this.costitemcode.id : 0,    
    ownerchargecodeid: this.ownerchargecode.id ? this.ownerchargecode.id : 0,
    ownerchargeamounttypeid: this.ownerchargeamounttype.id ? this.ownerchargeamounttype.id : 0,
    ownerchargeamount: this.ownerchargeamount,
    chargingperiodid: this.chargingperiod.id ? this.chargingperiod.id : 0,
  };

  if (this.parent.type === 'Template') {
    obj.amountnetestimate = this.amountnetestimate;
    obj.amountlimittypeid = this.amountlimittype.id ? this.amountlimittype.id : 0;
    obj.amountnetlimit = this.amountnetlimit;
    obj.chargingperiodsestimate = this.chargingperiodsestimate;
  } else {
    obj.amountnet = this.amountnet;
    obj.amountvat = this.amountvat;
    obj.supplierinvoiceitemid = this.supplierinvoiceitem.id ? this.supplierinvoiceitem.id : 0;
    obj.notes = this.notes;
  }
  
  return obj;

};

module.exports = WorkOrderExpense;
