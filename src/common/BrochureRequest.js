var SingleEntity = require('./SingleEntity');
var Customer = require('./Customer');
var EntityLink = require('./EntityLink');

function BrochureRequest(id) {
  this.path = this.createPath = 'request';
  this.id = id;
  this.customer = new Customer();
  this.brochure = new EntityLink({
    entity: 'Brochure'
  });
}

BrochureRequest.prototype = new SingleEntity();
BrochureRequest.prototype.toArray = function() {
  return {
    customerid: this.customer.id,
    emailoptin: this.emailoptin,
    processeddatetime: this.processeddatetime
  };
};

module.exports = BrochureRequest;
