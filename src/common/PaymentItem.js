var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var Extra = require('./Extra');
var VatRate = require('./VatRate');
var Owner = require('./Owner');
var Joi = require('joi');

function PaymentItem(id) {
  this.path = 'item';
  this.createPath = 'item';
  this.id = id;
  this.owner = new Owner();
  this.booking = new EntityLink({
    entity: 'Booking'
  });
  this.ownercharge = new EntityLink({
    entity: 'OwnerCharge'
  });
  this.bookingbrand = new EntityLink({
    entity: 'BookingBrand'
  });
  this.vatrate = new VatRate();
  this.extras = new Collection({
    object: Extra,
    path: 'extra',
    parents: [this]
  });
}
PaymentItem.prototype = new SingleEntity();

PaymentItem.prototype.toUpdateArray = function() {
  var fields = {};
  if ( this.authorisedbytabsuser ) {
    fields.authorisedbytabsuserid = this.authorisedbytabsuser.id;
    fields.authorised = this.authorised;
  }
  if ( this.dontpayowneruntildate ) {
    fields.dontpayowneruntildate = this.dontpayowneruntildate;
  }
  return fields;
};

PaymentItem.validUpdateSchema = Joi.object().keys({
  dontpayowneruntildate: Joi.object().optional().label('hold date'),
  authorisedbytabsuser: Joi.object().optional().label('authorised by'),
  authorised: Joi.boolean().optional().label('authorised'),
});

module.exports = PaymentItem;
