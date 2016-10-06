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
    authorisedbytabsuserid: this.authorisedbytabsuser.id,
    authorised: this.authorised
  };
};

PaymentItem.validUpdateSchema = Joi.object().keys({
  authorisedbytabsuser: Joi.object().label('authorised by'),
  authorised: Joi.boolean().label('authorised'),
});

module.exports = PaymentItem;
