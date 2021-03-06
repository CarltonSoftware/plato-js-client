var SingleEntity = require('./SingleEntity');
var WorkOrderSupplier = require('./WorkOrderSupplier');
var SupplierInvoiceItem = require('./SupplierInvoiceItem');
var Document = require('./Document');
var Collection = require('./Collection');

function SupplierInvoice(id) {
  this.path = this.createPath = 'supplierinvoice';
  this.id = id;
  this.workordersupplier = new WorkOrderSupplier();
  this.invoiceitems = new Collection({
    path: 'item',
    parent: this,
    object: SupplierInvoiceItem
  });
  this.document = new Document();
}

SupplierInvoice.prototype = new SingleEntity();
SupplierInvoice.prototype.toArray = function() {
  return {
    workordersupplierid: this.workordersupplier.id,
    invoicedate: this.invoicedate,
    invoicenumber: this.invoicenumber,
    description: this.description,
    totalamountnet: this.totalamountnet,
    supplierprovided: this.supplierprovided,
    documentid: this.document.id
  };
};

module.exports = SupplierInvoice;
