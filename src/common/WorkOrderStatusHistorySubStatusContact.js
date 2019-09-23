var SingleEntity = require('./SingleEntity');

function WorkOrderStatusHistorySubStatusContact(id) {
  this.path = 'substatus/' + id + '/contact';
  this.createPath = this.path;
  this.id = id;
}
WorkOrderStatusHistorySubStatusContact.prototype = new SingleEntity();

WorkOrderStatusHistorySubStatusContact.prototype.toArray = function() {
  return { };
};


module.exports = WorkOrderStatusHistorySubStatusContact;
