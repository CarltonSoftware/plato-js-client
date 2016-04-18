var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var ManagedActivity = require('./ManagedActivity');

function PropertySupplier(id) {
  this.path = 'supplier';
  this.createPath = 'supplier';
  this.id = id;
  this.actor = new EntityLink({
    entity: 'Supplier'
  });
  this.activity = new ManagedActivity();
}
PropertySupplier.prototype = new SingleEntity();

PropertySupplier.prototype.toArray = function() {
  return {
    id: this.id,
    actorid: this.actor.id,
    fromdate: this.fromdate,
    todate: this.todate,
    managedactivityid: this.activity.id
  };
};

module.exports = PropertySupplier;
