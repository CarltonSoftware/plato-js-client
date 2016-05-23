var SingleEntity = require('./SingleEntity');
var ContactMethodType = require('./ContactMethodType');
var Language = require('./Language');
var Collection = require('./Collection');
var TemplateElement = require('./TemplateElement');

function TemplateContactMethod(id) {
  this.createPath = this.path = 'contactmethod';
  this.id = id;
  this.contactmethodtype = new ContactMethodType();
  this.language = new Language();
  this.elements = new Collection({
    object: TemplateElement,
    path: 'element',
    parent: this
  });
}

TemplateContactMethod.prototype = new SingleEntity();

TemplateContactMethod.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
    description: this.description,
    contactmethodtypeid: this.contactmethodtype.id,
    languageid: this.language.id,
  };
};

module.exports = TemplateContactMethod;
