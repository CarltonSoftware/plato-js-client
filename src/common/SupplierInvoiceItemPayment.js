var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var ExchangeRate = require('./ExchangeRate');

function SupplierInvoiceItemPayment(id) {
  this.path = this.createPath = 'payment';
  this.id = id;
  this.exchangerate = new ExchangeRate();
  this.supplierpayment = new EntityLink({
    entity: 'SupplierPayment'
  });
}

SupplierInvoiceItemPayment.prototype = new SingleEntity();
SupplierInvoiceItemPayment.prototype.toArray = function() {
  return {
    exchangerateid: this.exchangerate.id,
    supplierpaymentid: this.supplierpayment.id,
    amountnet: this.amountnet,
    amountvat: this.amountvat,
    commissionnet: this.commissionnet,
    commissionvat: this.commissionvat
  };
};

module.exports = SupplierInvoiceItemPayment;
