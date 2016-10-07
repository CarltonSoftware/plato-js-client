var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var OwnerChargeCode = require('./OwnerChargeCode');
var ExchangeRateIssueRate = require('./ExchangeRateIssueRate');

function OwnerCharge(id) {
  this.path = this.createPath = 'charge';
  this.id = id;
  this.ownerchargecode = new OwnerChargeCode();
  this.exchangerate = new ExchangeRateIssueRate();
  this.booking = new EntityLink({ entity: 'Booking' });
  this.property = new EntityLink({ entity: 'Property' });
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
  if (this.type == 'OwnerChargeWorkOrder') {
    fields.invoiceitemid = this.invoiceitem.id;
  } else if (this.type == 'OwnerChargeProperty') {
    fields.propertyid = this.property.id;
    if (this.booking) {
      fields.bookingid = this.booking.id;
    }
    if (this.supplierpaid) {
      fields.supplierpaid = this.supplierpaid;
    }
    if (this.invoicenumber) {
      fields.invoicenumber = this.invoicenumber;
    }
    if (this.chequenumber) {
      fields.chequenumber = this.chequenumber;
    }

  } else {
    fields.bookingid = this.booking.id;
  }

  return fields;
};

module.exports = OwnerCharge;
