var SingleEntity = require('./SingleEntity');

function BookingGuest(id) {
  this.path = 'guest';
  this.createPath = 'guest';
  this.id = id;
}

BookingGuest.prototype = new SingleEntity();
BookingGuest.prototype.toArray = function() {
  return {
    name: this.name,
    guesttype: this.guesttype,
    guestagerangeid: this.guestagerangeid,
    petbreed: this.petbreed,
    pettype: this.pettype,
    bookingcustomerid: this.bookingcustomerid
  };
};

module.exports = BookingGuest;
