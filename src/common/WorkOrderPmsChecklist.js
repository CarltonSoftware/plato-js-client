var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function WorkOrderPmsChecklist(id) {
  this.path = this.createPath = 'pmschecklist';
  this.id = id;
  this.pmschecklist = new EntityLink({
    entity: 'PmsChecklist'
  });
}
WorkOrderPmsChecklist.prototype = new SingleEntity();

WorkOrderPmsChecklist.prototype.toArray = function() {
  return {
    pmschecklistid: this.pmschecklist.id,
    json: this.json,
    updateddatetime: this.updateddatetime
  };
};

module.exports = WorkOrderPmsChecklist;
