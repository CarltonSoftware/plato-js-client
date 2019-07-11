var SingleEntity = require('./SingleEntity');
var WorkOrderSubStatus = require('./WorkOrderSubStatus');
var Actor = require('./Actor');

WorkOrderStatusHistorySubStatus.prototype = new SingleEntity();

function WorkOrderStatusHistorySubStatus(id) {
  this.path = 'substatus';
  this.createPath = this.path;
  this.id = id;
  this.workordersubstatus = new WorkOrderSubStatus();
  this.setbyactor = new Actor();
}

WorkOrderStatusHistorySubStatus.prototype.toArray = function() {
  var arr = {
    workordersubstatusid: this.workordersubstatus.id,
    fromdatetime: this.fromdatetime,
    setbyactorid: this.setbyactor.id
  };

  if (this.expire) {
    arr.expire = true;
  };

  return arr;
}

module.exports = WorkOrderStatusHistorySubStatus;