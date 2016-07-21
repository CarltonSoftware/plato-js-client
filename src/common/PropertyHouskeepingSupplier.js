var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function PropertyHouskeepingSupplier() {
  this.actor = new EntityLink({ entity: 'Supplier' });
}
PropertyHouskeepingSupplier.prototype = new SingleEntity();

module.exports = PropertyHouskeepingSupplier;
