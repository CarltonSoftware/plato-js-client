var SingleEntity = require('./SingleEntity');
var Property = require('./Property');

function TemplateContactMethodAttachmentProperty(id) {
  this.createPath = this.path = 'property';
  this.id = id;
  this.property = new Property();
}

TemplateContactMethodAttachmentProperty.prototype = new SingleEntity();
TemplateContactMethodAttachmentProperty.prototype.toArray = function() {
  return {
    propertyid: this.property.id
  };
};

module.exports = TemplateContactMethodAttachmentProperty;
