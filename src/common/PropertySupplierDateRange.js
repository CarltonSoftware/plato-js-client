var SingleEntity = require('./SingleEntity');

function PropertySupplierDateRange(id) {
  this.path = 'daterange';
  this.createPath = 'daterange';
  this.id = id;
}
PropertySupplierDateRange.prototype = new SingleEntity();

PropertySupplierDateRange.prototype.toArray = function() {
  return {
    fromdate: this.fromdate,
    todate: this.todate,
  };
};

module.exports = PropertySupplierDateRange;
