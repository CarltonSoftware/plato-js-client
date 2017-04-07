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
  this.ownercharge = new EntityLink({
    entity: 'OwnerCharge'
  });
  this.booking = new EntityLink({
    entity: 'Booking'
  });
}
BookingSupplier.prototype = new SingleEntity();

/**
 * Add in Owner object if found.
 *
 * @param {object} entity JSON response from api
 */
BookingSupplier.prototype.mutateResponse = function(entity) {
  if (entity.actor) {
    var s = require('./Supplier');
    this.actor = new s();
    this.actor.mutateResponse(entity.actor);
  }

  return this.mutateEntity(entity);
};


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

  if (this.ownercharge.id) {
    data.ownerchargeid = this.ownercharge.id;
  }

  return data;
};

module.exports = BookingSupplier;
