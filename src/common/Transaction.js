var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Collection = require('./Collection');
var TransactionDefinition = require('./TransactionDefinition');
var Entry = require('./Entry');

function Transaction(id) {
  this.path = 'transaction';
  this.createPath = 'transaction';
  this.id = id;
  this.transactiondefinition = new TransactionDefinition();
  this.booking = new EntityLink({
    entity: 'Booking'
  });
  this.bookingextra = new EntityLink({
    entity: 'BookingExtra'
  });
  this.customer = new EntityLink({
    entity: 'Customer'
  });
  this.actorpayment = new EntityLink({
    entity: 'ActorPayment'
  });
  this.bookingpayment = new EntityLink({
    entity: 'BookingPayment'
  });
  this.owner = new EntityLink({
    entity: 'Owner'
  });
  this.ownercharge = new EntityLink({
    entity: 'OwnerCharge'
  });
  this.ownerPayment = new EntityLink({
    entity: 'OwnerPayment'
  });
  this.property = new EntityLink({
    entity: 'Property'
  });
  this.entries = new Collection({
    object: Entry,
    path: 'entry',
    parents: [this]
  });
}
Transaction.prototype = new SingleEntity();

module.exports = Transaction;
