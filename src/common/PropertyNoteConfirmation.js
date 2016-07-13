var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function PropertyNoteConfirmation(id) {
  this.createPath = 'confirmation';
  this.path = 'confirmation';
  this.id = id;
}

PropertyNoteConfirmation.prototype = new SingleEntity();

PropertyNoteConfirmation.prototype.toArray = function() {
  return {
    actorid: this.actorid,
    bookingid: this.bookingid
  };
};

PropertyNoteConfirmation.prototype.toCreateArray = function() {
  return {
    actorid: this.actorid,
    bookingid: this.bookingid
  };
};

module.exports = PropertyNoteConfirmation;
