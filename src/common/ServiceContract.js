var SingleEntity = require('./SingleEntity');

function ServiceContract(id) {
  this.createPath = this.path = 'contract';
  this.id = id;
}

ServiceContract.prototype = new SingleEntity();

ServiceContract.prototype.toArray = function() {
  return {
    servicecontracttypeid: this.servicecontracttype.id,
    fromdate: this.fromdate,
    todate: this.todate
  };
};

module.exports = ServiceContract;
