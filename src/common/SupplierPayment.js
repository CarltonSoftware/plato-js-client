var SingleEntity = require('./SingleEntity');
var WorkOrderSupplier = require('./WorkOrderSupplier');
var Collection = require('./Collection');
var EntityLink = require('./EntityLink');

function SupplierPayment(id) {
  this.path = this.createPath = 'supplierpayment';
  this.id = id;
  this.workordersupplier = new WorkOrderSupplier();
  this.tabsuser = new EntityLink({ entity: 'TabsUser' });
}

SupplierPayment.prototype = new SingleEntity();
SupplierPayment.prototype.toArray = function() {
  return {
    workordersupplierid: this.workordersupplier.id,
    tabsuserid: this.tabsuserid,
    paymentdate: this.paymentdate,
    remark: this.remark,
    sortcode: this.sortcode,
    accountnumber: this.accountnumber,
    chequenumber: this.chequenumber
  };
};

module.exports = SupplierPayment;
