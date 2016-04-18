var SingleEntity = require('./SingleEntity');
var Collection = require('./Collection');
var ChangeDayTemplateRule = require('./ChangeDayTemplateRule');

function ChangeDayTemplate(id) {
  this.path = 'changedaytemplate';
  this.createPath = 'changedaytemplate';
  this.id = id;

  this.rule = new Collection({
    object: ChangeDayTemplateRule,
    path: 'rule',
    parent: this
  });

}
ChangeDayTemplate.prototype = new SingleEntity();

ChangeDayTemplate.prototype.toArray = function() {
  var fields = {
    type: this.type,
    name: this.name,
    description: this.description,
    fromdate: this.fromdate,
    todate: this.todate,
  };
  if (this.type == 'Branding') {
    fields.brandingid = this.brandingid;
    fields.parentid = this.parentid;
  } else if (this.type == 'Property') {
    fields.propertybrandingid = this.propertybrandingid;
  }
  return fields;
};

module.exports = ChangeDayTemplate;
