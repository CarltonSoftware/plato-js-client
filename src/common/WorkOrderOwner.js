var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function WorkOrderOwner(id) {
  this.path = this.createPath = 'workorderowner';
  this.id = id;
  this.owner = new EntityLink({
    entity: 'Owner'
  });
}
WorkOrderOwner.prototype = new SingleEntity();

WorkOrderOwner.prototype.toArray = function() {
  return {
    ownerid: this.owner.id,
    markuppercent: this.commissionpercent,
    showchargesseparately: this.showchargesseparately,
  };
};

module.exports = WorkOrderOwner;
