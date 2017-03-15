var SingleEntity = require('./SingleEntity');

function ManagedActivity(id) {
  this.path = 'managedactivity';
  this.createPath = 'managedactivity';
  this.id = id;
}

ManagedActivity.prototype = new SingleEntity();
ManagedActivity.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    donotmodify: this.donotmodify
  };
};
ManagedActivity.prototype.toString = function() {
  return this.name;
};

module.exports = ManagedActivity;
