var SingleEntity = require('./SingleEntity');
var ManagedService = require('./ManagedService');

function PropertySupplierService(id) {
  this.path = 'service';
  this.createPath = 'service';
  this.id = id;
  this.service = new ManagedService();
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
