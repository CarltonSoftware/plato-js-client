var SingleEntity = require('./SingleEntity');
var Document = require('./Document');

function ActorDocument(id) {
  this.path = 'document/' + id;
  this.createPath = 'document';
  this.document = new Document();
  this.id = id;
}
ActorDocument.prototype = new SingleEntity();
ActorDocument.prototype.toArray = function() {
  return {
    documentid: this.document.id
  };
};

module.exports = ActorDocument;
