var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');
var Document = require('./Document');
var Collection = require('./Collection');
var TemplateContactMethodAttachmentProperty = require('./TemplateContactMethodAttachmentProperty');
var TemplateContactMethodAttachmentBranding = require('./TemplateContactMethodAttachmentBranding');

function TemplateContactMethodAttachment(id) {
  this.createPath = this.path = 'attachment';
  this.id = id;
  this.document = new Document();
  this.templatecontactmethod = new EntityLink({
    entity: 'TemplateContactMethod',
    parent:  new EntityLink({
      entity: 'Template'
    })
  });
  this.properties = new Collection({
    object: TemplateContactMethodAttachmentProperty,
    path: 'property',
    parent: this
  });
  this.branding = new Collection({
    object: TemplateContactMethodAttachmentBranding,
    path: 'branding',
    parent: this 
  });
}

TemplateContactMethodAttachment.prototype = new SingleEntity();

TemplateContactMethodAttachment.prototype.toArray = function() {
  if (this.document.id) {
    return {
      documentid: this.document.id
    };
  } else if (this.templatecontactmethod.id) {
    return {
      templatecontactmethodid: this.templatecontactmethod.id
    };
  }

  return {};
};

module.exports = TemplateContactMethodAttachment;
