var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var ManagedActivity = require('./ManagedActivity');
var Collection = require('./Collection');
var PropertySupplierDateRange = require('./PropertySupplierDateRange');
var PropertySupplierService = require('./PropertySupplierService');

function PropertySupplier(id) {
  this.path = 'supplier';
  this.createPath = 'supplier';
  this.id = id;
  this.actor = new EntityLink({
    entity: 'Actor'
  });
  this.activity = new ManagedActivity();
  this.dates = new Collection({
    object: PropertySupplierDateRange,
    path: 'daterange',
    parent: this
  });
  this.services = new Collection({
    object: PropertySupplierService,
    path: 'service',
    parent: this
  });
}
PropertySupplier.prototype = new SingleEntity();

PropertySupplier.prototype.toArray = function() {
  return {
    actorid: this.actor.id,
    fromdate: this.fromdate,
    todate: this.todate,
    managedactivityid: this.activity.id
  };
};

module.exports = PropertySupplier;
