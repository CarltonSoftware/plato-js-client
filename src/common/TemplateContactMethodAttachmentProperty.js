var SingleEntity = require('./SingleEntity');
var Property = require('./Property');
var Joi = require('joi');

function TemplateContactMethodAttachmentProperty(id) {
  this.createPath = this.path = 'property';
  this.id = id;
  this.property = new Property();

  this.validSchema = function() {
    return {
      property: Joi.object().required().label('Property')
    };
  }
}

TemplateContactMethodAttachmentProperty.prototype = new SingleEntity();
TemplateContactMethodAttachmentProperty.prototype.toArray = function() {
  return {
    propertyid: this.property.id
  };
};

module.exports = TemplateContactMethodAttachmentProperty;
