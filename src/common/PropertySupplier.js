var SingleEntity = require('./SingleEntity');
var Supplier = require('./Supplier');
var ManagedActivity = require('./ManagedActivity');

function PropertySupplier(id) {
  this.path = 'supplier';
  this.createPath = 'supplier';
  this.id = id;
  this.actor = new Supplier();
  this.managedactivity = new ManagedActivity();
}
PropertySupplier.prototype = new SingleEntity();

PropertySupplier.prototype.toArray = function() {
  return {
    id: this.id,
    actorid: this.actor.id,
    fromdate: this.fromdate,
    todate: this.todate,
    managedactivityid: this.managedactivity.id
  };
};

module.exports = PropertySupplier;
