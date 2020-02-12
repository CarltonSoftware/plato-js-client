var SingleEntity = require('./SingleEntity');
var AmountLimitType = require('./AmountLimitType');
var CostItemCode = require('./CostItemCode');
var SupplierInvoiceItem = require('./SupplierInvoiceItem');
var OwnerChargeCode = require('./OwnerChargeCode');
var OwnerChargeAmountType = require('./OwnerChargeAmountType');
var Currency = require('./Currency');
var VatBand = require('./VatBand');
var ChargingPeriod = require('./ChargingPeriod');
var WorkOrderOwnerChargeTemplate = require('./WorkOrderOwnerChargeTemplate');
var Collection = require('./Collection');

function WorkOrderExpenseTemplate(id) {
  this.path = this.createPath = 'workorderexpensetemplate';
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
    object: WorkOrderOwnerChargeTemplate,
    path: 'workorderownerchargetemplate',
    parent: this
  });
}
WorkOrderExpenseTemplate.prototype = new SingleEntity();

WorkOrderExpenseTemplate.prototype.toArray = function() {

  var obj = {
    description: this.description,
    currencyid: this.currency.id,
    vatbandid: this.vatband.id,
    ownerchargeamount: this.ownerchargeamount,
  };

  if (this.costitemcode.id) {obj.costitemcodeid = this.costitemcode.id;}
  if (this.ownerchargecode.id >= 0) {obj.ownerchargecodeid = this.ownerchargecode.id;}
  if (this.ownerchargeamounttype.id >= 0) {obj.ownerchargeamounttypeid = this.ownerchargeamounttype.id;}
  if (this.chargingperiod.id >= 0) {obj.chargingperiodid = this.chargingperiod.id;}
  if (parseFloat(this.chargingperiodpriceperunit) >= 0) {obj.chargingperiodpriceperunit = this.chargingperiodpriceperunit;}

  if (this.amountnetestimate) {obj.amountnetestimate = this.amountnetestimate;}
  if (this.chargingperiodsestimate) {obj.chargingperiodsestimate = this.chargingperiodsestimate;}
  if (this.amountlimittype !== undefined && this.amountlimittype.id >= 0) {obj.amountlimittypeid = this.amountlimittype.id;}
  if (this.amountnetlimit) {obj.amountnetlimit = this.amountnetlimit;}

  if (this.amountnet) {obj.amountnet = this.amountnet;}
  if (this.amountvat) {obj.amountvat = this.amountvat;}
  if (this.notes) {obj.notes = this.notes;}
  if (this.chargingperiodsactual) {obj.chargingperiodsactual = this.chargingperiodsactual;}
  if (this.supplierinvoiceitem.id >= 0) {obj.supplierinvoiceitemid = this.supplierinvoiceitem.id;}

  if (this.agencycostnet) {obj.agencycostnet = this.agencycostnet;}

  return obj;

};

module.exports = WorkOrderExpenseTemplate;
