var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');
var Mimetype = require('./Mimetype');
var File = require('./File');
var StaticCollection = require('./StaticCollection');
var DocumentBaseTag = require('./DocumentBaseTag');

function Document(id) {
  this.path = 'document';
  this.createPath = 'document';
  this.id = id;
  this.file = new File();
  this.mimetype = new Mimetype();
  this.tags = new StaticCollection({
    object: DocumentBaseTag,
    parent: this,
    path: 'tag'
  });
}
Document.prototype = new SingleEntity();
Document.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    weight: this.weight,
    private: this.private
  };
};

Document.prototype.toString = function() {
  return this.name;
};

Document.prototype.toFormData = function() {
  var formData = new FormData();
  formData.append('data', this.data);
  formData.append('name', this.name);
  formData.append('description', this.description);
  return formData;
};

Document.prototype.stitch = function(documentIds) {
  return client.get(
    'stitch' + this.path + '?documents=' + documentIds.join(",")
  );
};

module.exports = Document;
