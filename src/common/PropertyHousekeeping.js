var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var PropertyHousekeepingSupplier = require('./PropertyHousekeepingSupplier');

function PropertyHousekeeping() {
  this.suppliers = new Collection({
    object: PropertyHousekeepingSupplier,
  });
}
PropertyHousekeeping.prototype = new SingleEntity();

module.exports = PropertyHousekeeping;
