var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function TemplateContactMethod(id) {
  this.createPath = this.path = 'contactmethod';
  this.id = id;
  this.contactmethodtype = new EntityLink({ entity: 'ContactMethodType' });
  this.language = new EntityLink({ entity: 'Language' });
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
