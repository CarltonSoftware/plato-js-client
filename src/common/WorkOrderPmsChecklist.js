var client = require('./platoJsClient').getInstance();
var SingleEntity = require('./SingleEntity');
var EntityLink = require('./EntityLink');

function WorkOrderPmsChecklist(id, answersonly) {
  this.path = this.createPath = 'pmschecklist';
  this.id = id;
  this.answersonly = answersonly;
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

WorkOrderPmsChecklist.prototype.render = function() {
  return client.get(
    'workorder/' + this.parent.id + '/' + this.path + '/' + this.id + '/render?answersonly='+this.answersonly
  );
};

module.exports = WorkOrderPmsChecklist;
