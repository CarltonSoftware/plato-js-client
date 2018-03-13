var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var ManagedService = require('./ManagedService');
var SupplierServiceCharge = require('./SupplierServiceCharge');

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
  this.servicecharge = new SupplierServiceCharge();
}
BookingSupplier.prototype = new SingleEntity();

/**
 * Add in Owner object if found.
 *
 * @param {object} entity JSON response from api
 */
BookingSupplier.prototype.mutateResponse = function(entity) {
  if (entity.actor && typeof entity.actor === 'string') {
    if (entity.actor.indexOf('/supplier/') != -1) {
      var s = require('./Supplier');
    } else if (entity.actor.indexOf('/agency/') != -1) {
      s = require('./Agency');
    }
    if (s) {
      this.actor = new s();
      this.actor.mutateResponse(entity.actor);
    }
  }
  if (entity.actor && typeof entity.actor === 'object') {
    var s = require('./' + entity.actor.type);
    if (s) {
      this.actor = new s();
      this.actor.mutateResponse(entity.actor);
    }
  }
  if (entity.ownercharge) {
    var s = require('./OwnerCharge');
    this.ownercharge = new s();
    this.ownercharge.mutateResponse(entity.ownercharge);

    if (this.ownercharge.owner) {
      var o = require('./Owner');
      var owner = new o();
      owner.id = this.ownercharge.owner.split('/').pop();
      this.ownercharge.parent = owner;
    }
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
