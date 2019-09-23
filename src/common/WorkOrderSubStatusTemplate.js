var SingleEntity = require('./SingleEntity');
var Template = require('./Template');
var WorkOrderSubStatusTemplateAssignee = require('./WorkOrderSubStatusTemplateAssignee');

WorkOrderSubStatusTemplate.prototype = new SingleEntity();

function WorkOrderSubStatusTemplate(id) {
  this.path = 'template';
  this.createPath = this.path;
  this.id = id;
  this.template = new Template();
  this.assignee = new WorkOrderSubStatusTemplateAssignee();
}

WorkOrderSubStatusTemplate.prototype.toArray = function() {
  return {
    workordersubstatustemplateassigneeid: this.assignee.id,
    workorderinstancetemplateid: this.template.id,
  };
}

module.exports = WorkOrderSubStatusTemplate;