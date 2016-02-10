var SingleEntity = require('./SingleEntity');
var Supplier = require('./Supplier');

function PropertySupplier(propertyId, id) {
  this.path = 'supplier';
  this.createPath = 'supplier';
  this.id = id;
  this.actor = new Supplier;
}
PropertySupplier.prototype = new SingleEntity();

PropertySupplier.prototype.toArray = function() {
  return {
    id: this.id,
    supplier: this.supplier,
    fromdate: this.fromdate,
    todate: this.todate,
  };
};
PropertySupplier.prototype.toCreateArray = function() {
  return {
    supplierid: this.supplierid,
    fromdate: this.fromdate,
    todate: this.todate,
  };
};

module.exports = PropertySupplier;
