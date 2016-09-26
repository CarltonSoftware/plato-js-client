var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Joi = require('joi');

function OwnerPaymentSelection(id) {
  this.path = 'ownerpaymentselection';
  this.createPath = 'ownerpaymentselection';
  this.id = id;
  this.bookingbrand = new EntityLink({
    entity: 'BookingBrand'
  });
  this.createdby = new EntityLink({
    entity: 'TabsUser'
  });
}
OwnerPaymentSelection.prototype = new SingleEntity();

OwnerPaymentSelection.prototype.toArray = function() {
  return {
    bookingbrandid: this.bookingbrand.id,
    selectbookingson: this.selectbookingson,
    paytodate: this.paytodate,
    paidbytabsuserid: this.paidbytabsuser.id,
    createdbytabsuserid: this.createdbytabsuser.id,
    cancelledbytabsuserid: this.cancelledbytabsuser.id,
    owneridlist: this.owneridlist
  };
};

OwnerPaymentSelection.prototype.validSchema = function() {
  return Joi.object().keys({
    bookingbrand: Joi.object().label('booking brand'),
    selectbookingson: Joi.string().required().label('select bookings on'),
    paytodate: Joi.date().required().label('pay to date'),
    paidbytabsuser: Joi.object().optional().label('Paid by'),
    createdbytabsuser: Joi.object().optional().label('created'),
    cancelledbytabsuser: Joi.object().optional().label('cancelled by'),
    owneridlist: Joi.string().optional().allow('').label('owner id list')
  });
};

module.exports = OwnerPaymentSelection;
