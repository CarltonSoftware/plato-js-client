var SingleEntity = require('./SingleEntity');

function GuestAgeRange(id) {
  this.path = 'guestagerange';
  this.createPath = this.path;
  this.id = id;
}
GuestAgeRange.prototype = new SingleEntity();

GuestAgeRange.prototype.toArray = function() {
  return {
    agefrom: this.agefrom,
    ageto: this.ageto
  };
};

module.exports = GuestAgeRange;
