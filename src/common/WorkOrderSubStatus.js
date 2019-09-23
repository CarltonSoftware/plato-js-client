var SingleEntity = require('./SingleEntity');
var WorkOrderSubStatusNext = require('./WorkOrderSubStatusNext');
var WorkOrderSubStatusTemplate = require('./WorkOrderSubStatusTemplate');
var Collection = require('./Collection');

WorkOrderSubStatus.prototype = new SingleEntity();

function WorkOrderSubStatus(id) {
  this.path = 'workordersubstatus';
  this.createPath = this.path;
  this.id = id;

  this.nextworkordersubstatuses = new Collection({
    object: WorkOrderSubStatusNext,
    path: 'next',
  });

  this.templates = new Collection({
    object: WorkOrderSubStatusTemplate,
    path: 'template'
  });
}

module.exports = WorkOrderSubStatus;