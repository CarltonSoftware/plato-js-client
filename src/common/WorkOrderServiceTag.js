var SingleEntity = require('./SingleEntity');
var ServiceTag = require('./ServiceTag');

function WorkOrderServiceTag(id) {
  this.path = 'servicetag';
  this.createPath = 'servicetag';
  this.id = id;
  this.servicetag = new ServiceTag();
}
WorkOrderServiceTag.prototype = new SingleEntity();

WorkOrderServiceTag.prototype.toArray = function() {
  return {
    servicetagid: this.servicetag.id,
  };
};

module.exports = WorkOrderServiceTag;
