var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function WorkOrderAssociation(id) {
  this.path = this.createPath = 'association';
  this.id = id;
  this.associatedworkorder = new EntityLink({
    entity: 'WorkOrder'
  });
}
WorkOrderAssociation.prototype = new SingleEntity();

WorkOrderAssociation.prototype.toArray = function() {
  return {
    associatedworkorderid: this.associatedworkorder.id,
    comment: this.comment
  };
};

module.exports = WorkOrderAssociation;
