var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function PropertyHousekeepingSupplier() {
  this.actor = new EntityLink({ entity: 'Supplier' });
}
PropertyHousekeepingSupplier.prototype = new SingleEntity();

module.exports = PropertyHousekeepingSupplier;
