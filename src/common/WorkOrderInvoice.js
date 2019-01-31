var SingleEntity = require('./SingleEntity');

function WorkOrderInvoice(id) {
  this.path = 'workorder/' + id + '/invoice';
  this.createPath = this.path;
  this.id = id;
}
WorkOrderInvoice.prototype = new SingleEntity();

WorkOrderInvoice.prototype.toArray = function() {
  var fields = {};
  if (this.supplierinvoice_invoicedate) {
    fields.supplierinvoice_invoicedate = this.supplierinvoice_invoicedate;
  }
  if (this.supplierinvoice_invoicenumber) {
    fields.supplierinvoice_invoicenumber = this.supplierinvoice_invoicenumber;
  }
  if (this.supplierinvoice_description) {
    fields.supplierinvoice_description = this.supplierinvoice_description;
  }

  return fields;
};


module.exports = WorkOrderInvoice;
