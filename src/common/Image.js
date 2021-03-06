var SingleEntity = require('./SingleEntity');
var Mimetype = require('./Mimetype');
var File = require('./File');
var Joi = require('joi');
var client = require('./platoJsClient').getInstance();
var StaticCollection = require('./StaticCollection');
var DocumentBaseTag = require('./DocumentBaseTag');

function Image(id) {
  this.path = 'image';
  this.createPath =  'image';
  this.id = id;
  this.mimetype = new Mimetype();
  this.file = new File();
  this.tags = new StaticCollection({
    object: DocumentBaseTag,
    parent: this,
    path: 'tag'
  });
}
Image.prototype = new SingleEntity();

Image.prototype.toFormData = function() {
  var formData = new FormData();
  formData.append('data', this.data);
  if (this.weight) {
    formData.append('weight', this.weight);
  }
  if (this.description) {
    formData.append('description', this.description);
  }
  if (this.alt) {
    formData.append('alt', this.alt);
  }
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
    alt: this.alt
  };
};
Image.prototype.getUrl = function(type, width, height) {
  return client.getHost() + '/v2/' + this.path + '/' + this.id + '/resize/' + type + '/' + width + '/' + height + '/' + this.filename;
};
Image.prototype.validSchema = function() {
  return Joi.object().keys({
    name: Joi.string().label('Name'),
    weight: Joi.number().empty('').label('Order'),
    description: Joi.string().empty('').label('Description'),
    alt: Joi.string().empty('').label('alt Text'),
    private: Joi.boolean()
  });
};

module.exports = Image;
