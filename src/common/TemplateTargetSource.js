var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function TemplateTargetSource(id) {
  this.createPath = this.path = 'templatetarget';
  this.id = id;
  this.templatesource = new EntityLink({ entity: 'TemplateSource' });
  this.templatetarget = new EntityLink({ entity: 'TemplateTarget' });
}

TemplateTargetSource.prototype = new SingleEntity();

TemplateTargetSource.prototype.toArray = function() {
  return {
    name: this.fieldname,
    templatesourceid: this.templatesource.id,
    templatetargetid: this.templatetarget.id,
  };
};

module.exports = TemplateTargetSource;
