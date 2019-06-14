var SingleEntity = require('./SingleEntity');

function SupplierWorkingDay(id) {
  this.path = this.createPath = 'workingday';
  this.id = id;
}
SupplierWorkingDay.prototype = new SingleEntity();

SupplierWorkingDay.prototype.toArray = function() {
  return {
    dayofweek: this.dayofweek,
    fromtime: this.fromtime,
    totime: this.totime,
  };
};

module.exports = SupplierWorkingDay;
