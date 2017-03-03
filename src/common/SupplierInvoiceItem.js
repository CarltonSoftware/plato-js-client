var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var ExchangeRate = require('./ExchangeRate');
var TabsUser = require('./TabsUser');
var SupplierInvoiceItemPayment = require('./SupplierInvoiceItemPayment');
var Collection = require('./Collection');

function SupplierInvoiceItem(id) {
  this.path = this.createPath = 'item';
  this.id = id;
  this.exchangerate = new ExchangeRate();
  this.workorder = new EntityLink({
    entity: 'WorkOrder'
  });
  this.updatedbyactorid = new TabsUser();
  this.itempayments = new Collection({
    object: SupplierInvoiceItemPayment,
    path: 'payment',
    parent: this
  });
}

SupplierInvoiceItem.prototype = new SingleEntity();

SupplierInvoiceItem.prototype.getSummaryTotal = function(prop) {
  var t = 0;
  if (this.itempayments.getTotal() > 0) {
    for (var i in this.itempayments.collection) {
      t += parseFloat(this.itempayments.collection[i][prop]);
    }
  };

  return t;
};
SupplierInvoiceItem.prototype.getTotalPaidNet = function() {
  return this.getSummaryTotal('amountnet');
};
SupplierInvoiceItem.prototype.getTotalPaidVat = function() {
  return this.getSummaryTotal('amountvat');
};
SupplierInvoiceItem.prototype.getOutstandingNet = function() {
  return (this.amountnet ? parseFloat(this.amountnet) : 0) - this.getTotalPaidNet();
};
SupplierInvoiceItem.prototype.getOutstandingVat = function() {
  return (this.amountvat ? parseFloat(this.amountvat) : 0) - this.getTotalPaidVat();
};

SupplierInvoiceItem.prototype.toArray = function() {
  return {
    exchangerateid: this.exchangerate.id,
    amountnet: this.amountnet,
    amountvat: this.amountvat,
    description: this.description,
    workorderinstanceid: this.workorder.id,
    updatedbyactorid: this.updatedbyactorid.id
  };
};

module.exports = SupplierInvoiceItem;
