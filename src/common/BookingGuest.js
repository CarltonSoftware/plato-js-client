var SingleEntity = require('./SingleEntity');
var Guest = require('./Guest');

function BookingGuest(bookingId, id) {
    this.path = 'booking/' + bookingId + '/guest';
    this.createPath = 'booking/' + bookingId + '/guest';
    this.id = id;
}
BookingGuest.prototype = new SingleEntity();

BookingGuest.prototype.toArray = function() {
  return {
    name: this.name,
    guesttype: this.type,
    guestagerangeid: this.guestagerangeid,
    bookingcustomerid: this.bookingcustomerid
  };
}

module.exports = BookingGuest;
