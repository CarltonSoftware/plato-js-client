var DocumentAssociation = require('./DocumentAssociation');
var Document = require('./Document');

function BookingDocument(bookingId, id) {
  this.path = 'booking/' + bookingId + '/document';
  this.createPath = 'booking/' + bookingId + '/document';
  this.document = new Document();
  this.id = id;
}
BookingDocument.prototype = new DocumentAssociation();

module.exports = BookingDocument;
