var client = require('./platoJsClient').getInstance();
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
  this.assignedtoactor = new Actor();
}

WorkOrderStatusHistorySubStatus.prototype.toArray = function() {
  var arr = {
    workordersubstatusid: this.workordersubstatus.id,
    fromdatetime: this.fromdatetime,
    setbyactorid: this.setbyactor.id
  };

  if (this.expire) {
    arr.expire = true;
  }

  if (this.assignedtoactor && this.assignedtoactor.id) {
    arr.assignedtoactorid = this.assignedtoactor.id;
  }

  if (this.workordernote && this.workordernote.id) {
    arr.workordernoteid = this.workordernote.id;
  }

  return arr;
}

WorkOrderStatusHistorySubStatus.prototype.contact = function(values) {
  return client.put({ path: [
    this.parent.parent.path,
    this.parent.parent.id,
    this.parent.path, 
    this.parent.id, 
    this.path, 
    this.id, 
    'contact'
  ].join('/'), entity: values });
};

module.exports = WorkOrderStatusHistorySubStatus;