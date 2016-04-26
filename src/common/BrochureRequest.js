var SingleEntity = require('./SingleEntity');
// var SourceMarketingBrand = require('./SourceMarketingBrand');
var Customer = require('./Customer');

function BrochureRequest(id) {
  this.path = this.createPath = 'request';
  this.id = id;
  // this.sourcemarketingbrand = new SourceMarketingBrand;
  this.customer = new Customer();
}

BrochureRequest.prototype = new SingleEntity();
BrochureRequest.prototype.toArray = function() {
  return {
    customerid: this.customer.id,
    emailoptin: this.emailoptin,
    processeddatetime: this.processeddatetime
    // requestdatetime:
    // sourcemarketingbrandid: this.sourcemarketingbrand.id,
    // tabsuserid: this.tabsuser.id,
  };
};

module.exports = BrochureRequest;
