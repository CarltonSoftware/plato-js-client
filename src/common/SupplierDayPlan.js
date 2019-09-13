var SingleEntity = require('./SingleEntity');

function SupplierDayPlan(id) {
  this.path = this.createPath = 'dayplan';
  this.id = id;
}
SupplierDayPlan.prototype = new SingleEntity();

SupplierDayPlan.prototype.toArray = function() {
  return {
    plandate: this.plandate,
    dayplan: this.dayplan,
  };
};

module.exports = SupplierDayPlan;
