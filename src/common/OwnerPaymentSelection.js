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

OwnerPaymentSelection.prototype.toCreateArray = function() {
  return {
    bookingbrandid: this.bookingbrand.id,
    selectbookingson: this.selectbookingson,
    paytodate: this.paytodate,
    createdbytabsuserid: this.createdbytabsuser.id,
    ownerids: this.ownerids
  };
};

OwnerPaymentSelection.prototype.toUpdateArray = function() {
  var fields = {};
  if (this.paidbytabsuser) {
    fields.paidbytabsuserid = this.paidbytabsuser.id;
  }
  if (this.owner) {
    fields.ownerid = this.owner.id;
  }
  if (this.cancelledbytabsuser) {
    fields.cancelledbytabsuserid = this.cancelledbytabsuser.id;
  }
  if (this.authorisedbytabsuser) {
    fields.authorisedbytabsuserid = this.authorisedbytabsuser.id;
    fields.authorised = this.authorised;
    fields.value = this.value;
  }

  return fields;
};

OwnerPaymentSelection.prototype.payOwner = function(owner, tabsUser) {
  return this.updatePromiseResult(
    this.path + '/' + this.id,
    { ownerid: owner.id, paidbytabsuserid: tabsUser.id }
  );
};

OwnerPaymentSelection.prototype.toString = function() {
  return [this.bookingbrand.id, this.paytodate].join(' ');
};

OwnerPaymentSelection.validCreateSchema = Joi.object().keys({
  bookingbrand: Joi.object().label('booking brand'),
  selectbookingson: Joi.string().valid('fromdate', 'todate').label('select bookings on'),
  paytodate: Joi.date().required().label('pay to date'),
  createdbytabsuser: Joi.object().optional().label('created by'),
  ownerids: Joi.string().optional().label('owner ids')
});

OwnerPaymentSelection.validUpdateSchema = Joi.object().keys({
  paidbytabsuser: Joi.object().optional().label('Paid by'),
  createdbytabsuser: Joi.object().optional().label('created by'),
  cancelledbytabsuser: Joi.object().optional().label('cancelled by'),
  authorisedbytabsuser: Joi.object().optional().label('authorised by'),
  authorised: Joi.boolean().optional().label('authorised'),
  value: Joi.number().optional().label('value')
});

module.exports = OwnerPaymentSelection;
