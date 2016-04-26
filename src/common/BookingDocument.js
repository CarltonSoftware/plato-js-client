var SingleEntity = require('./SingleEntity');
var Document = require('./Document');

function BookingDocument(bookingId, id) {
  this.path = 'booking/' + bookingId + '/document';
  this.createPath = 'booking/' + bookingId + '/document';
  this.document = new Document();
  this.id = id;
}
BookingDocument.prototype = new SingleEntity();
BookingDocument.prototype.toCreateArray = function() {
  return {
    documentid: this.document.id
  };
};

module.exports = BookingDocument;
