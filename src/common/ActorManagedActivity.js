var SingleEntity = require('./SingleEntity');
var ManagedActivity = require('./ManagedActivity');

function ActorManagedActivity(actorId, id) {
    // Set the actor path explicitly to fix the route, otherwise the actor type is used.
    this.path = 'actor/' + actorId + '/managedactivity';
    this.createPath = this.path;
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
