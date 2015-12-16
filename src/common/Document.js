var SingleEntity = require('./SingleEntity');

function Document(id) {
  this.path = 'document';
  this.createPath = 'document';
  this.id = id;
}
Document.prototype = new SingleEntity();
Document.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description
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
