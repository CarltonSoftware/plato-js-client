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
  var fields = {
    customerid: this.customer.id,
    emailoptin: this.emailoptin,
    processeddatetime: this.processeddatetime
  };
  if (this.sourcemarketingbrand && this.sourcemarketingbrand.id) {
    fields.sourcemarketingbrandid = this.sourcemarketingbrand.id;
  }
  return fields;
};

module.exports = BrochureRequest;
