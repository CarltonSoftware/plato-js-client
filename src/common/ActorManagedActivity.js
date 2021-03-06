var SingleEntity = require('./SingleEntity');
var ManagedActivity = require('./ManagedActivity');

function ActorManagedActivity(id) {
  this.path = 'managedactivity';
  this.createPath = this.path;
  this.id = id;
  this.managedactivity = new ManagedActivity();
}

ActorManagedActivity.prototype = new SingleEntity();
ActorManagedActivity.prototype.getCreatePath = function() {
  return ['actor', this.parent.id, this.path].join('/');
};
ActorManagedActivity.prototype.getUpdatePath = function() {
  return ['actor', this.parent.id, this.path, this.id].join('/');
};

ActorManagedActivity.prototype.toArray = function() {
  return {
    managedactivityid: this.managedactivityid,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = ActorManagedActivity;
