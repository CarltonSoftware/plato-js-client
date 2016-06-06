var SingleEntity = require('./SingleEntity');
var Note = require('./Note');

function BookingNote(id) {
  this.createPath = 'bookingnote';
  this.path = 'bookingnote';
  this.id = id;
  this.note = new Note();
}
BookingNote.prototype = new SingleEntity();

BookingNote.prototype.toArray = function() {
  return {
    bookingid: this.bookingid,
    noteid: this.note.id
  };
};

BookingNote.prototype.toCreateArray = function() {
  return {
    bookingid: this.bookingid,
    noteid: this.note.id
  };
};

module.exports = BookingNote;
