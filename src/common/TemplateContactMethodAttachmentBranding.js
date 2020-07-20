var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function TemplateContactMethodAttachmentBranding(id) {
  this.createPath = this.path = 'branding';
  this.id = id;
  this.branding = new EntityLink({
    entity: 'Branding'
  });
}

TemplateContactMethodAttachmentBranding.prototype = new SingleEntity();
TemplateContactMethodAttachmentBranding.prototype.toArray = function() {
  return {
    brandingid: this.branding.id
  };
};

module.exports = TemplateContactMethodAttachmentBranding;
