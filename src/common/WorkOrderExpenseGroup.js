var SingleEntity = require('./SingleEntity');
var WorkOrderExpense = require('./WorkOrderExpense');
var Collection = require('./Collection');

function WorkOrderExpenseGroup(workorderid, id) {
  this.path = 'workorder/'+workorderid+'/expensegroup';
  this.createPath = 'workorder/'+workorderid+'/expensegroup';
  this.id = id;
  this.parent = 'workorder';
  this.expenses = new Collection({
    object: WorkOrderExpense,
    path: 'expenses',
    parent: this
  });
}
WorkOrderExpenseGroup.prototype = new SingleEntity();

WorkOrderExpenseGroup.prototype.toArray = function() {
  var arr = {
    name: this.name
  };

  if (this.workorderexpensewithownercharges && this.workorderexpensewithownercharges.id) {
    arr.workorderexpensewithownerchargesid = this.workorderexpensewithownercharges.id;
  }

  return arr;
};

module.exports = WorkOrderExpenseGroup;
