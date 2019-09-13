var SingleEntity = require('./SingleEntity');
var WorkOrderSubStatusNext = require('./WorkOrderSubStatusNext');
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
}

module.exports = WorkOrderSubStatus;