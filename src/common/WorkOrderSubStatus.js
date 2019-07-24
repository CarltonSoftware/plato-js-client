var SingleEntity = require('./SingleEntity');

WorkOrderSubStatus.prototype = new SingleEntity();

function WorkOrderSubStatus(id) {
  this.path = 'workordersubstatus';
  this.createPath = this.path;
  this.id = id;
}

module.exports = WorkOrderSubStatus;