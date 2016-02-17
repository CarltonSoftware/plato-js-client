var SingleEntity = require('./SingleEntity'),
  Address = require('./Address');

function ActorContactDetailAddress(id) {
  this.path = 'address';
  this.address = new Address();
}
ActorContactDetailAddress.prototype = new SingleEntity();

ActorContactDetailAddress.prototype.toArray = function() {
  return this.address.toArray();
};

module.exports = ActorContactDetailAddress;
