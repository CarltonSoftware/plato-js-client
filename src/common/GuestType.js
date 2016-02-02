var SingleEntity = require('./SingleEntity');

function GuestType(id) {
  this.path = 'guesttype';
  this.createPath = this.path;
  this.id = id;
}
GuestType.prototype = new SingleEntity();

GuestType.prototype.toArray = function() {
  return {
    'guesttype': this.guesttype
  };
};

module.exports = GuestType;
