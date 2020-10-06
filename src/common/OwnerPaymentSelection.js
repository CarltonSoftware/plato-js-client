var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var OwnerPaymentSelectionBookingBrand = require('./OwnerPaymentSelectionBookingBrand');
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
  this.bookingbrands = new Collection({
    object: OwnerPaymentSelectionBookingBrand,
    path: 'bookingbrand',
    parent: this
  });
}
OwnerPaymentSelection.prototype = new SingleEntity();

OwnerPaymentSelection.prototype.toCreateArray = function() {
  var s = {
    selectbookingson: this.selectbookingson,
    paytodate: this.paytodate,
    ownerids: this.ownerids,
    propertyids: this.propertyids,
    createdbytabsuserid: this.createdbytabsuser.id,
    balancepaid: this.balancepaid || false,
    accidentaldamagedepositpaid: this.accidentaldamagedepositpaid || false
  };

  if (this.bookingbrands.getTotal() > 0) {
    s.bookingbrandids = this.bookingbrands.map(function(b) {
      return b.bookingbrand.id;
    }).join(',');
  } else if (this.bookingbrand.id) {
    s.bookingbrandid = this.bookingbrand.id;
  }

  return s;
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
  bookingbrand: Joi.object().optional().label('booking brand'),
  bookingbrands: Joi.any().optional().label('booking brands'),
  selectbookingson: Joi.string().valid('fromdate', 'todate').label('select bookings on'),
  paytodate: Joi.date().required().label('pay to date'),
  ownerids: Joi.string().allow("").optional().label('owner ids'),
  propertyids: Joi.string().allow("").optional().label('property ids'),
  balancepaid: Joi.boolean().required().label('Bookings with balance paid'),
  accidentaldamagedepositpaid: Joi.boolean().required().label('Bookings with ADD waiver paid'),
  createdbytabsuser: Joi.object().optional().label('created by')
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
