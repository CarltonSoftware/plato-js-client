var SingleEntity = require('./SingleEntity');

function ServiceContractType(id) {
  this.createPath = this.path = 'servicecontracttype';
  this.id = id;
}

ServiceContractType.prototype = new SingleEntity();

ServiceContractType.prototype.toArray = function() {
  return {
    name: this.name,
    description: this.description,
    invoiceto: this.invoiceto
  };
};

module.exports = ServiceContractType;
