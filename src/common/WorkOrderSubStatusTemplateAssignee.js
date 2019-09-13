var SingleEntity = require('./SingleEntity');

WorkOrderSubStatusTemplateAssignee.prototype = new SingleEntity();

function WorkOrderSubStatusTemplateAssignee(id) {
  this.path = 'workordersubstatustemplateassignee';
  this.createPath = this.path;
  this.id = id;
}

module.exports = WorkOrderSubStatusTemplateAssignee;