var SingleEntity = require('./SingleEntity'),
  Address = require('./Address');

function ActorContactDetailAddress(id) {
  this.id = id;
  this.path = 'address';
  this.createPath = 'address';
  this.address = new Address();
}
ActorContactDetailAddress.prototype = new SingleEntity();

ActorContactDetailAddress.prototype.toArray = function() {
  return this.address.toArray();
};

ActorContactDetailAddress.prototype.validSchema = function() {
  return this.address.validSchema();
};

module.exports = ActorContactDetailAddress;
