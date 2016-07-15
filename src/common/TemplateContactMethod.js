var client = require('./platoJsClient').getInstance();
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

TemplateContactMethod.prototype.getRefPath = function(ref) {
  if (typeof ref === 'object') {
    ref = ref.id;
  } 

  return this.parent.path + '/' + this.parent.id + '/' + this.path + '/' + this.id + '/ref/' + ref;
};

TemplateContactMethod.prototype.getRef = function(ref) {
  return client.get(this.getRefPath(ref));
};

TemplateContactMethod.prototype.render = function(ref) {
  return client.get(this.getRefPath(ref) + '/render');
};

TemplateContactMethod.prototype.save = function(ref, entity) {
  return entity.createPromiseResult(
    this.getRefPath(ref) + '/save',
    {}
  );
};

module.exports = TemplateContactMethod;
