var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var OwnerChargeCode = require('./OwnerChargeCode');
var ExchangeRateIssueRate = require('./ExchangeRateIssueRate');

function OwnerCharge(id) {
  this.path = 'ownercharge';
  this.createPath = 'ownercharge';
  this.id = id;
  this.ownerchargecode = new OwnerChargeCode();
  this.exchangerate = new ExchangeRateIssueRate();
  this.booking = new EntityLink({ entity: 'Booking' });
  this.booking = new EntityLink({ entity: 'Property' });
}

OwnerCharge.prototype = new SingleEntity();
OwnerCharge.prototype.toArray = function() {
  return {
    type: this.type,
    ownerchargecodeid: this.ownerchargecode.id,
    amountnet: this.amountnet,
    amountvat: this.amountvat,
    exchangerateid: this.exchangerate.id,
    cancelleddate: this.cancelleddate,
    // ownerstatementid: this.ownerstatement.id,
    // invoiceitemid: this.invoiceitem.id,
    bookingid: this.booking.id,
    propertyid: this.property.id,
    workdonedate: this.workdonedate,
    supplierpaid: this.supplierpaid,
    invoicenumber: this.invoicenumber,
    chequenumber: this.chequenumber,
  };
};

module.exports = OwnerCharge;
