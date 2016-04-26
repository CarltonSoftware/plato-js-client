var SingleEntity = require('./SingleEntity');
var TabsUser = require('./TabsUser');

function BookingNote(bookingNoteID) {
  this.createPath = 'bookingnote';
  this.path = 'bookingnote';
  this.id = bookingNoteID;
  this.createdby = new TabsUser();
}
BookingNote.prototype = new SingleEntity();

BookingNote.prototype.toArray = function() {
  return {
    bookingid: this.bookingid,
    noteid: this.noteid
  };
};

BookingNote.prototype.toCreateArray = function() {
  return {
    bookingid: this.bookingid,
    noteid: this.noteid
  };
};

module.exports = BookingNote;
