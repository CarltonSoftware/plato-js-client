var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var ExchangeRate = require('./ExchangeRate');

function SupplierInvoiceItem(id) {
  this.path = this.createPath = 'item';
  this.id = id;
  this.exchangerate = new ExchangeRate();
  this.workorder = new EntityLink({
    entity: 'WorkOrder'
  });
}

SupplierInvoiceItem.prototype = new SingleEntity();
SupplierInvoiceItem.prototype.toArray = function() {
  return {
    exchangerateid: this.exchangerate.id,
    amountnet: this.amountnet,
    amountvar: this.amountvar,
    description: this.description
  };
};

module.exports = SupplierInvoiceItem;
