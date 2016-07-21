var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var PropertyHouskeepingSupplier = require('./PropertyHouskeepingSupplier');

function PropertyHouskeeping(id) {
  this.suppliers = new Collection({
    object: PropertyHouskeepingSupplier,
  });
}
PropertyHouskeeping.prototype = new SingleEntity();

module.exports = PropertyHouskeeping;
