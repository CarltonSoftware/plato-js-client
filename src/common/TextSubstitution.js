var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function TextSubstitution(id) {
  this.createPath = this.path = 'textsubstitution';
  this.id = id;
  this.template = new EntityLink({ entity: 'Template' });
  this.templatetargetsource = new EntityLink({ entity: 'TemplateTargetSource' });
}

TextSubstitution.prototype = new SingleEntity();

TextSubstitution.prototype.toArray = function() {
  return {
    fieldname: this.fieldname,
    sourceexpression: this.sourceexpression,
    description: this.description,
    example: this.example,
    templateid: this.template.id,
    templatetargetsourceid: this.templatetargetsource.id,
  };
};

module.exports = TextSubstitution;
