var SingleEntity = require('./SingleEntity');
var Document = require('./Document');

function ContactDocument(id) {
  this.createPath = 'document';
  this.path = 'document';
  this.id = id;
  this.document = new Document();
}
ContactDocument.prototype = new SingleEntity();

ContactDocument.prototype.toArray = function() {
  return {
    documentid: this.document.id
  };
};

module.exports = ContactDocument;
