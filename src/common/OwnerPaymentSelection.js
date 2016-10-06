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
    createdbytabsuserid: this.createdbytabsuser.id
  };
};

OwnerPaymentSelection.prototype.toUpdateArray = function() {
  var fields = {};
  if (this.paidbytabsuser) {
    fields.paidbytabsuserid = this.paidbytabsuser.id;
  }
  if (this.cancelledbytabsuser) {
    fields.cancelledbytabsuserid = this.cancelledbytabsuser.id;
  }
  if (this.authorisedbytabsuser) {
    fields.authorisedbytabsuserid = this.authorisedbytabsuser.id;
    fields.authorise = this.authorise;
    fields.value = this.value;
  }

  return fields;
};

OwnerPaymentSelection.validCreateSchema = Joi.object().keys({
  bookingbrand: Joi.object().label('booking brand'),
  selectbookingson: Joi.string().valid('fromdate', 'todate').label('select bookings on'),
  paytodate: Joi.date().required().label('pay to date'),
  createdbytabsuser: Joi.object().optional().label('created by')
});

OwnerPaymentSelection.validUpdateSchema = Joi.object().keys({
  paidbytabsuser: Joi.object().optional().label('Paid by'),
  createdbytabsuser: Joi.object().optional().label('created by'),
  cancelledbytabsuser: Joi.object().optional().label('cancelled by'),
  authorise: Joi.boolean().optional().label('authorise'),
  value: Joi.number().optional().label('value')
});

module.exports = OwnerPaymentSelection;
