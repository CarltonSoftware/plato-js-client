var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var ExchangeRate = require('./ExchangeRate');
var TabsUser = require('./TabsUser');

function SupplierInvoiceItem(id) {
  this.path = this.createPath = 'item';
  this.id = id;
  this.exchangerate = new ExchangeRate();
  this.workorder = new EntityLink({
    entity: 'WorkOrder'
  });
  this.updatedbyactorid = new TabsUser();
}

SupplierInvoiceItem.prototype = new SingleEntity();
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
