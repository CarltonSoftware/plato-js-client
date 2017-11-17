var SingleEntity = require('./SingleEntity');
var Document = require('./Document');
var Image = require('./Image');

function DocumentAssociation(id) {
  this.path = 'document';
  this.createPath = 'document';
  this.document = new Document();
  this.image = new Image();
  this.id = id;
}
DocumentAssociation.prototype = new SingleEntity();
DocumentAssociation.prototype.toCreateArray = function() {
  return {
    documentid: this.document.id
  };
};

module.exports = DocumentAssociation;
