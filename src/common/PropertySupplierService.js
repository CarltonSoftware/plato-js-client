var SingleEntity = require('./SingleEntity');
var ManagedService = require('./ManagedService');
var Collection = require('./Collection');
var SupplierServiceCharge = require('./SupplierServiceCharge');

function PropertySupplierService(id) {
  this.path = 'service';
  this.createPath = 'service';
  this.id = id;
  this.service = new ManagedService();

  this.charges = new Collection({
    object: SupplierServiceCharge,
    path: 'charge',
    parent: this
  });
}
PropertySupplierService.prototype = new SingleEntity();

PropertySupplierService.prototype.toArray = function() {
  return {  
    fromdate: this.fromdate,
    todate: this.todate,
    serviceid: this.service.id
  };
};

module.exports = PropertySupplierService;
