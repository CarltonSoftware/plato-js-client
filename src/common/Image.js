var SingleEntity = require('./SingleEntity');
var Mimetype = require('./Mimetype');
var File = require('./File');

function Image(id) {
  this.path = 'image';
  this.createPath =  'image';
  this.id = id;
  this.mimetype = new Mimetype;
  this.file = new File;
}
Image.prototype = new SingleEntity();

Image.prototype.toFormData = function() {
  var formData = new FormData();
  formData.append('data', this.data);
  // formData.append('name', this.name);
  // formData.append('weight', this.weight);
  formData.append('description', this.description);
  // formData.append('private', this.private);
  // formData.append('height', this.height);
  // formData.append('width', this.width);
  formData.append('alt', this.alt);
  return formData;
};
Image.prototype.toArray = function() {
  return {
    name: this.name,
    weight: this.weight,
    description: this.description,
    private: this.private,
    height: this.height,
    width: this.width,
    alt: this.alt,
  };
};

module.exports = Image;
