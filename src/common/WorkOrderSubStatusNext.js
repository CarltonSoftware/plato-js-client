var SingleEntity = require('./SingleEntity');

WorkOrderSubStatusNext.prototype = new SingleEntity();

function WorkOrderSubStatusNext(id) {
  this.path = 'next';
  this.createPath = this.path;
  this.id = id;
}

module.exports = WorkOrderSubStatusNext;