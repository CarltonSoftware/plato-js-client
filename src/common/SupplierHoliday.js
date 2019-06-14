var SingleEntity = require('./SingleEntity');

function SupplierHoliday(id) {
  this.path = this.createPath = 'holiday';
  this.id = id;
}
SupplierHoliday.prototype = new SingleEntity();

SupplierHoliday.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
  };
};

module.exports = SupplierHoliday;
