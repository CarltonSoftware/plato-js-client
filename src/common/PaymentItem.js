var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var Extra = require('./Extra');
var VatRate = require('./VatRate');
var Joi = require('joi');

function PaymentItem(id) {
  this.path = 'item';
  this.createPath = 'item';
  this.id = id;
  this.owner = new EntityLink({
    entity: 'Owner'
  });
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
  return {
    authorisedby: this.authorisedby,
    refresh: this.refresh
  };
};

PaymentItem.prototype.validUpdateSchema = function() {
  return Joi.object().keys({
    authorisedby: Joi.object().label('authorised by'),
    refresh: Joi.boolean().label('refresh'),
  });
};

module.exports = PaymentItem;
