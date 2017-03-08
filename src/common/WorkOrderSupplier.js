var SingleEntity = require('./SingleEntity');
var Supplier = require('./Supplier');

function WorkOrderSupplier(id) {
  this.path = this.createPath = 'workordersupplier';
  this.id = id;
  this.supplier = new Supplier();
}
WorkOrderSupplier.prototype = new SingleEntity();

WorkOrderSupplier.prototype.toArray = function() {
  return {
    supplierid: this.supplier.id,
    commissionpercent: this.commissionpercent,
    paymenttype: this.paymenttype,
    payeename: this.payeename,
    paymentadvice: this.paymentadvice,
    hourlyrate: this.hourlyrate,
    calloutcharge: this.calloutcharge,
    defaultinvoiceto: this.defaultinvoiceto
  };
};

WorkOrderSupplier.prototype.toString = function() {
  var a = [this.supplier.getFullName()];
  if (this.payeename) {
    a.push(' (');
    a.push(this.payeename);
    a.push(')');
  }
  return a.join('');
};

module.exports = WorkOrderSupplier;
