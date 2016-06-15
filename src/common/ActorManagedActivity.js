var SingleEntity = require('./SingleEntity');
var ManagedActivity = require('./ManagedActivity');

function ActorManagedActivity(id) {
    this.path = 'managedactivity';
    this.createPath = 'managedactivity';
    this.id = id;

    this.managedactivity = new ManagedActivity();
}
ActorManagedActivity.prototype = new SingleEntity();

ActorManagedActivity.prototype.toArray = function() {
  return {
    managedactivityid: this.managedactivityid,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = ActorManagedActivity;
