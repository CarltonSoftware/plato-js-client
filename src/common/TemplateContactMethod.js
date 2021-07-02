var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');
var ContactMethodType = require('./ContactMethodType');
var Language = require('./Language');
var Collection = require('./Collection');
var TemplateElement = require('./TemplateElement');
var TemplateStyleSheet = require('./TemplateStyleSheet');
var TemplateContactMethodAttachment = require('./TemplateContactMethodAttachment');
var TemplateContactMethodBranding = require('./TemplateContactMethodBranding');
var TemplateContactMethodTriggerEvent = require('./TemplateContactMethodTriggerEvent');

function TemplateContactMethod(id) {
  this.createPath = this.path = 'contactmethod';
  this.id = id;
  this.contactmethodtype = new ContactMethodType();
  this.language = new Language();
  this.templatestylesheet = new TemplateStyleSheet();
  this.elements = new Collection({
    object: TemplateElement,
    path: 'element',
    parent: this
  });
  this.attachments = new Collection({
    object: TemplateContactMethodAttachment,
    path: 'attachment',
    parent: this
  });
  this.brandings = new Collection({
    object: TemplateContactMethodBranding,
    path: 'branding',
    parent: this
  });
  this.triggerevents = new Collection({
    object: TemplateContactMethodTriggerEvent,
    path: 'triggerevent',
    parent: this
  });
}

TemplateContactMethod.prototype = new SingleEntity();

TemplateContactMethod.prototype.toArray = function() {
  var obj = {
    fromdate: this.fromdate,
    todate: this.todate,
    description: this.description,
    excludestandardheader: this.excludestandardheader,
    excludestandardfooter: this.excludestandardfooter,
    disablewysiwyg: this.disablewysiwyg,
    contactmethodtypeid: this.contactmethodtype.id,
    languageid: this.language.id,
    templatestylesheetid: this.templatestylesheet.id,
  };

  if (this.hasOwnProperty('multilingualsubject')) {
    obj.multilingualsubject = this.multilingualsubject;
  }

  return obj;
};

TemplateContactMethod.prototype.getRefPath = function(ref) {
  if (typeof ref === 'object') {
    ref = ref.id;
    return [this.parent.path, this.parent.id, this.path, this.id, 'ref', ref].join('/');
  } else if (typeof ref === 'undefined') {
    return [this.parent.path, this.parent.id, this.path, this.id].join('/');
  } else {
    return [this.parent.path, this.parent.id, this.path, this.id, 'ref', ref].join('/');
  }
};

TemplateContactMethod.prototype.getLabel = function() {
  return this.toString();
};

TemplateContactMethod.prototype.toString = function() {
  var lbl = [this.language.name, this.contactmethodtype.method];
  if (this.parent && this.parent.templatename) {
    lbl.unshift(this.parent.templatename);
  }

  return lbl.join(' - ');
};
TemplateContactMethod.prototype.getRef = function(ref) {
  return client.get(this.getRefPath(ref));
};

TemplateContactMethod.prototype.render = function(ref) {
  return client.get(this.getRefPath(ref) + '/render');
};

TemplateContactMethod.prototype.preview = function() {
  return client.get(this.getRefPath() + '/preview');
};

TemplateContactMethod.prototype.getEmailContent = function(ref) {
  return client.get(this.getRefPath(ref) + '/email');
};

TemplateContactMethod.prototype.send = function(ref) {
  return client.put(this.getRefPath(ref) + '/send');
};

TemplateContactMethod.prototype.optOut = function(ref) {
  return client.put(this.getRefPath(ref) + '/optout');
};

TemplateContactMethod.prototype.schedule = function(ref, job, triggereventid) {
  return client.put({ path: this.getRefPath(ref) + '/schedule', entity: { job: job, triggereventid: triggereventid } });
};

TemplateContactMethod.prototype.sendIfAvailable = function(ref) {
  return client.put(this.getRefPath(ref) + '/sendifavailable');
};

TemplateContactMethod.prototype.save = function(ref, entity) {
  return entity.createPromiseResult(
    this.getRefPath(ref) + '/save',
    {}
  );
};

module.exports = TemplateContactMethod;
