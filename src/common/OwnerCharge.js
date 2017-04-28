var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var OwnerChargeCode = require('./OwnerChargeCode');
var ExchangeRateIssueRate = require('./ExchangeRateIssueRate');
var Supplier = require('./Supplier');
var SupplierInvoiceItem = require('./SupplierInvoiceItem');

function OwnerCharge(id) {
  this.path = this.createPath = 'charge';
  this.id = id;
  this.ownerchargecode = new OwnerChargeCode();
  this.exchangerate = new ExchangeRateIssueRate();
  this.booking = new EntityLink({ entity: 'Booking' });
  this.property = new EntityLink({ entity: 'Property' });
  this.supplier = new Supplier();
  this.invoiceitem = new SupplierInvoiceItem();
  this.createdby = new EntityLink({
    entity: 'TabsUser'
  });
}

OwnerCharge.prototype = new SingleEntity();
OwnerCharge.prototype.toArray = function() {
  var fields = {
    type: this.type,
    ownerchargecodeid: this.ownerchargecode.id,
    description: this.description,
    amountnet: this.amountnet,
    amountvat: this.amountvat,
    exchangerateid: this.exchangerate.id,
    cancelleddatetime: this.cancelleddatetime,
    lastupdateddatetime: this.lastupdateddatetime,
    workdonedate: this.workdonedate,
  };
  if (this.invoicenumber) {
    fields.invoicenumber = this.invoicenumber;
  }
  if (this.chequenumber) {
    fields.chequenumber = this.chequenumber;
  }
  if (this.type == 'OwnerChargeWorkOrder') {
    fields.invoiceitemid = this.invoiceitem.id;
  } else if (this.type == 'OwnerChargeProperty') {
    fields.propertyid = this.property.id;
    if (this.booking) {
      fields.bookingid = this.booking.id;
    }
    if (this.supplier) {
      fields.supplierid = this.supplier.id;
    }
    if (this.supplierpaiddate) {
      fields.supplierpaiddate = this.supplierpaiddate;
    }

  } else {
    fields.bookingid = this.booking.id;
  }
  if (this.createdbyactor) {
    fields.createdbyactorid = this.createdbyactor.id;
  }
  if (this.cancelledbyactor) {
    fields.cancelledbyactorid = this.cancelledbyactor.id;
  }

  return fields;
};

module.exports = OwnerCharge;
