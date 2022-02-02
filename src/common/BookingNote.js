var SingleEntity = require('./SingleEntity');
var Note = require('./Note');
var EntityLink = require('./EntityLink');
var Complaint = require('./Complaint');

function BookingNote(id) {
  this.createPath = 'bookingnote';
  this.path = 'bookingnote';
  this.id = id;
  this.booking = new EntityLink({
    entity: 'Booking'
  });
  this.note = new Note();
  this.complaint = new Complaint();
}
BookingNote.prototype = new SingleEntity();

BookingNote.prototype.toArray = function() {
  var arr = {
    bookingid: this.booking.id,
    noteid: this.note.id
  };

  if (this.complaint && this.complaint.id) {
    arr.complaintid = this.complaint.id
  }

  return arr;
};

module.exports = BookingNote;
