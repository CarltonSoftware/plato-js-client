var SingleEntity = require('./SingleEntity');
var WorkOrderExpense = require('./WorkOrderExpense');
var Collection = require('./Collection');

function WorkOrderExpenseGroup(id) {
  this.path = 'expensegroup';
  this.createPath = 'expensegroup';
  this.id = id;
  this.expenses = new Collection({
    object: WorkOrderExpense,
    path: 'expenses',
    parent: this
  });
}
WorkOrderExpenseGroup.prototype = new SingleEntity();

WorkOrderExpenseGroup.prototype.toArray = function() {
  return {
    name: this.name,
    workorderexpensewithownerchargesid: this.workorderexpensewithownercharges.id
  };
};

module.exports = WorkOrderExpenseGroup;
