var SingleEntity = require('./SingleEntity');
var Actor = require('./Actor');
var WorkOrderStatusHistorySubStatus = require('./WorkOrderStatusHistorySubStatus');
var Collection = require('./Collection');

WorkOrderStatusHistory.prototype = new SingleEntity();

function WorkOrderStatusHistory(id) {
  this.path = 'statushistory';
  this.createPath = this.path;
  this.id = id;
  this.setbyactor = new Actor();

  this.substatus = new Collection({
    object: WorkOrderStatusHistorySubStatus,
    path: 'substatus',
    parent: this
  });  
}

module.exports = WorkOrderStatusHistory;