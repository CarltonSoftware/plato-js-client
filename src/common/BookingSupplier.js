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
}
BookingSupplier.prototype = new SingleEntity();

BookingSupplier.prototype.toArray = function() {
  return {
    serviceid: this.serviceid,
    actorid: this.actorid
  };
};

module.exports = BookingSupplier;
