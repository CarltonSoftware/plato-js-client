var SingleEntity = require('./SingleEntity');
var Mimetype = require('./Mimetype');
var File = require('./File');

function Document(id) {
  this.path = 'document';
  this.createPath = 'document';
  this.id = id;
  this.file = new File();
  this.mimetype = new Mimetype();
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

Document.prototype.toFormData = function() {
  var formData = new FormData();
  formData.append('data', this.data);
  formData.append('name', this.name);
  formData.append('description', this.description);
  return formData;
};

module.exports = Document;
