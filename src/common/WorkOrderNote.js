var SingleEntity = require('./SingleEntity');
var Note = require('./Note');
var EntityLink = require('./EntityLink');

function WorkOrderNote(id) {
  this.createPath = 'workordernote';
  this.path = 'workordernote';
  this.id = id;
  this.workorder = new EntityLink({
    entity: 'WorkOrder'
  });
  this.note = new Note();
}
WorkOrderNote.prototype = new SingleEntity();

WorkOrderNote.prototype.toArray = function() {
  return {
    workorderid: this.workorder.id,
    noteid: this.note.id
  };
};

module.exports = WorkOrderNote;
