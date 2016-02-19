var SingleEntity = require('./SingleEntity');

function ManagedActivity(id) {
    this.path = 'managedactivity';
    this.createPath = 'managedactivity';
    this.id = id;
}
ManagedActivity.prototype = new SingleEntity();

ManagedActivity.prototype.toCreateArray = function() {
  return {
    name: this.name,
    description: this.description,
    donotmodify: this.donotmodify,
  };
};

module.exports = ManagedActivity;
