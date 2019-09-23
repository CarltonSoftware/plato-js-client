var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

WorkOrderSubStatusNext.prototype = new SingleEntity();

function WorkOrderSubStatusNext(id) {
  this.path = 'next';
  this.createPath = this.path;
  this.id = id;
  this.nextworkordersubstatus = new EntityLink({
    entity: 'WorkOrderSubStatus'
  });  
}

WorkOrderSubStatusNext.prototype.toArray = function() {}

module.exports = WorkOrderSubStatusNext;