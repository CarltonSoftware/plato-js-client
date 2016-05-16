var SingleEntity = require('./SingleEntity');

function TemplateTarget(id) {
  this.createPath = this.path = 'templatetarget';
  this.id = id;
}

TemplateTarget.prototype = new SingleEntity();

TemplateTarget.prototype.toArray = function() {
  return {
    templatetarget: this.templatetarget,
  };
};

module.exports = TemplateTarget;
