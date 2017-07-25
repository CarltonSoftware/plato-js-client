var SingleEntity = require('./SingleEntity');

function WorkOrderExpense(id) {
  this.path = this.createPath = 'expense';
  this.id = id;
}
WorkOrderExpense.prototype = new SingleEntity();

WorkOrderExpense.prototype.toArray = function() {
  return {
    description: this.description,
    amountnet: this.amountnet,
    amountvat: this.amountvat,
    currencyid: this.currency.id,
    vatbandid: this.vatband.id
  };
};

module.exports = WorkOrderExpense;
