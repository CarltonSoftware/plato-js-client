var SingleEntity = require('./SingleEntity');

function WorkOrderAssociation(id) {
  this.path = this.createPath = 'association';
  this.id = id;
  this.associatedworkorderinstance = new EntityLink({
    entity: 'WorkOrder'
  });
}
WorkOrderAssociation.prototype = new SingleEntity();

WorkOrderAssociation.prototype.toArray = function() {
  return {
    associatedworkorderinstanceid: this.associatedworkorderinstance.id,
    comment: this.comment
  };
};

module.exports = WorkOrderAssociation;
