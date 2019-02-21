var SingleEntity = require('./SingleEntity');
var ServiceContractType = require('./ServiceContractType');

function SupplierServiceContract(id) {
  this.path = 'contract';
  this.createPath = 'contract';
  this.id = id;
  this.servicecontracttype = new ServiceContractType();
}
SupplierServiceContract.prototype = new SingleEntity();

module.exports = SupplierServiceContract;
