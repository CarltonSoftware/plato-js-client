var SingleEntity = require('./SingleEntity');
var Document = require('./Document');

function WorkOrderDocument(workOrderId, id) {
  this.path = 'workorder/' + workOrderId + '/document';
  this.createPath = 'workorder/' + workOrderId + '/document';
  this.document = new Document();
  this.id = id;
}
WorkOrderDocument.prototype = new SingleEntity();
WorkOrderDocument.prototype.toCreateArray = function() {
  return {
    documentid: this.document.id
  };
};

module.exports = WorkOrderDocument;
