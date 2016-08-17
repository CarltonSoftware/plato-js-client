var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var ManagedService = require('./ManagedService');

function BookingSupplier(id) {
  this.path = 'supplier';
  this.createPath = 'supplier';
  this.id = id;
  this.service = new ManagedService();
  this.actor = new EntityLink({
    entity: 'Supplier'
  });
  this.markedcompletebyactor = new EntityLink({
    entity: 'TabsUser'
  });
  this.cancelledbyactor = new EntityLink({
    entity: 'TabsUser'
  });
}
BookingSupplier.prototype = new SingleEntity();

BookingSupplier.prototype.toArray = function() {
  var data = {
    serviceid: this.service.id,
    actorid: this.actor.id
  };

  if (this.markedcompletebyactor.id) {
    data.markedcompletebyactorid = this.markedcompletebyactor.id;
  }

  if (this.cancelledbyactor.id) {
    data.cancelledbyactorid = this.cancelledbyactor.id;
  }

  return data;
};

module.exports = BookingSupplier;
